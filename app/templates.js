angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/views/index.tpl.html","<div class=\"jumbotron\">\r\n    <h1>AngularJS + ES6 boilerplate application using Webpack</h1>\r\n    <small>coding4fun</small>\r\n    <p class=\"lead\">\r\n        Hello world..\r\n    </p>\r\n</div>\r\n\r\n<br/>\r\n\r\n<message-list messages=\"vm.messages\" header=\"\'Messages\'\"></message-list>");
$templateCache.put("home/views/message-list.directive.html","<h2>{{vm.header}}</h2>\r\n<ul>\r\n\r\n    <li ng-repeat=\"message in vm.messages\">\r\n        {{message.text}}\r\n    </li>\r\n</ul>");}]);