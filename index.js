var
  onvif = require('onvif'),
  http = require('http'),
  Cam = require('onvif').Cam;

var ipList = [];
onvif.Discovery.on('device', function(cam,rinfo,xml){
    var rtsp_cam = new Cam({
      hostname: cam.hostname,
      username: 'admin',
      password: 'tlJwpbo6',
      port: cam.port
    }, function(err) {
      this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
        ipList.push({'ip' : rtsp_cam.hostname,'uri':  stream.uri});
      });
      });
})

onvif.Discovery.probe(timeout=1000);


setTimeout(function(){
  console.log(ipList);
}, 1200);
