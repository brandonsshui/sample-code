
(function () {
    "use strict";

    angular.module(APPNAME)
        .factory('$eventService', eventServiceFactory);

    eventServiceFactory.$inject = ['$baseService', '$sabio'];

    function eventServiceFactory($baseService, $sabio) {
        var aSabioServiceObject = sabio.services.events;
        var newService = $baseService.merge(true, {}, aSabioServiceObject, $baseService);

        return newService;
    }
})();