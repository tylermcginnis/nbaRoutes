var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
var mainData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];
                                                                                                                                                                                                  $routeProvider
    .when('/', {templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl',resolve: {allData: function($route, homeService){return homeService.getAllData();},
        alldata: function(){
          return 'teamData.getData()'}
      }
    }).when('/teams/:team', {templateUrl: 'js/teams/teamTmpl.html',controller: 'teamCtrl',resolve: {teamData: function($route, teamService){return teamService.getTeamData($route.current.params.team);},teamdata: function(){return 'teamData()';}}}).otherwise({redirectTo: '/'})
var otherData=["{{repeat(5, 7)}}",{_id:"{{objectId()}}",index:"{{index()}}",utahjazz:"{{guid()}}",isActive:"{{bool()}}",teamData:'{{floating(1000, 4000, 2, "$0,0.00")}}',picture:"http://placehold.it/32x32",age:"{{integer(20, 40)}}",eyeColor:'{{random("blue", "brown", "green")}}',name:"{{firstName()}} {{surname()}}",gender:"{{gender()}}",company:"{{company().toUpperCase()}}",email:"{{email()}}",phone:"+1 {{phone()}}",address:"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",about:'{{lorem(1, "paragraphs")}}',registered:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',latitude:"{{floating(-90.000001, 90)}}",coaches:"{{floating(-180.000001, 180)}}",tags:["{{repeat(7)}}",'{{lorem(1, "words")}}'],lakers:["{{repeat(3)}}",{id:"{{index()}}",name:"{{firstName()}} {{surname()}}"}],miamiHeat:function(e){var a=["apple","banana","strawberry"];return a[e.integer(0,a.length-1)]}}];
})
