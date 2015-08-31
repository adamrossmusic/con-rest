module ExecutionVMS {
  import WorkflowExecutionDAO = DAO.WorkflowExecutionDAO;
  import ExecutionDAO = DAO.ExecutionDAO;
  import Execution = Models.Execution;

  export class ExecutionVM {
    static $inject = ['$scope', 'executionDAO'];

    execution: Execution;
    urlAvailable: boolean = false;
    url: string;
    regExp: RegExp = new RegExp('[a-zA-Z0-9]+://([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?');

    constructor($scope, executionDAO: ExecutionDAO) {
      this.execution = $scope.execution;
      $scope.vm = this;

      if(!!$scope.executionId) {
        executionDAO.getById($scope.executionId)
          .then((execution:Execution) => {
            this.execution = execution;
            this.setUrl(this.execution.response);
          });
      }
    }

    setUrl(obj: any): void {
      for(var key in obj) {
        if(this.checkForUrl(obj[key])) {
          this.urlAvailable = true;
          this.url = obj[key];
        }
      }
    }
    checkForUrl(value: string): boolean {
      return this.regExp.test(value);
    }

    convertToJSON(json: Object): string {
      if (!json) {
        return '-';
      }
      return JSON.stringify(json, null, 4);
    }
  }
}
