const axiosMock = jest.genMockFromModule('axios');

let mockResponseT ={ 
  data: {"value":"27.7"}
};

let mockResponseH ={ 
  data: {"value":"64.5"}
};

let mockResponseS ={ 
  data: {"value":"true"}
};

function fetchTemperature(){
  return new Promise(function(resolve){
    axiosMock.delayTimer = setTimeout(function(){
      resolve(mockResponseT);
    }, 1000);
  })
}

function fetchHumidity(){
  return new Promise(function(resolve){
    axiosMock.delayTimer = setTimeout(function(){
      resolve(mockResponseH);
    }, 1000);
  })
}

function fetchStatus(){
  return new Promise(function(resolve){
    axiosMock.delayTimer = setTimeout(function(){
      resolve(mockResponseS);
    }, 1000);
  })
}

axiosMock.get.mockImplementation(fetchTemperature).mockImplementationOnce(fetchHumidity).mockImplementationOnce(fetchStatus);

module.exports = axiosMock;