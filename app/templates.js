angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/message-list.directive.html","<h2>{{vm.header}}</h2>\r\n<ul>\r\n\r\n    <li ng-repeat=\"message in vm.messages\">\r\n        {{::message.text}}\r\n    </li>\r\n</ul>");
$templateCache.put("messages/list.html","<h3>AngularJS + ES6 boilerplate application using Webpack</h3>\r\n\r\n<message-list messages=\"vm.messages\" header=\"\'Messages\'\"></message-list>");}]);