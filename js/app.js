var app = angular.module('APP',[])

app.service('MobileService',function($http){
	
	var $dataMobile = [

		{
			name : 'Samsung',
			version : '2.5.6',
			OS : 'Andriod OS'
		},
		{
			name : 'iPad',
			version : '2.4',
			OS : 'iOS7'
		},


	]

	/*     if user json url 

		var $dataMobile = $http.get('servers/jsin-url.json').success(function(data){
			return data;
		});

	*/
	

		this.get = function(){
			return $dataMobile;
		}

		this.add =  function(dataMobile){
			$dataMobile.push(dataMobile);
		}

	   this.remove = function(index){
			$dataMobile.splice(index,1);
		}

		this.save = function(index,dataMobile){
			$dataMobile[index] = dataMobile ;
		}
	
})

app.controller('MyCtrl',function($scope,MobileService){

	//init
	$scope.showAdd = false; // hide form add
	$scope.showEdit = false; // hide form edit
	$scope.dataMobile = MobileService.get();

	// actions
	$scope.AddForm = function(){
		$scope.showAdd = true;
	}

	$scope.onAdd = function(Mobile){
		MobileService.add(Mobile);
		$scope.Mobile = [];
		$scope.showAdd = false;
	}

	$scope.onDel = function(index){
		MobileService.remove(index);
	}

	$scope.onEdit = function(Mobile){
		$scope.Mobile = Mobile;
		$scope.showEdit = true;
	}
	$scope.onSave = function(index,Mobile){
		MobileService.save(index,Mobile);
		$scope.Mobile = [];
		$scope.showEdit = false;
	}
	
})







