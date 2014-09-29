var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
$scope.teamData=teamData;var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.newGame={};var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.showNewGameForm=!1;var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.toggleNewGameForm=function(){$scope.showNewGameForm=!$scope.showNewGameForm};var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];if("utahjazz"===$routeParams.team){$scope.homeTeam="Utah Jazz";var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.logoPath="images/jazz-logo.png"}else if("losangeleslakers"===$routeParams.team){$scope.homeTeam="Los Angeles Lakers";var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.logoPath="images/lakers-logo.png"}else if("miamiheat"===$routeParams.team){$scope.homeTeam="Miami Heat";var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.logoPath="images/heat-logo.png"}var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];$scope.submitGame=function(){$scope.newGame.homeTeam=$scope.homeTeam.split(" ").join("").toLowerCase(),teamService.addNewGame($scope.newGame).then(function(){teamService.getTeamData($scope.newGame.homeTeam).then(function(e){$scope.teamData=e,$scope.newGame={};$scope.showNewGameForm=!1})})};
});
