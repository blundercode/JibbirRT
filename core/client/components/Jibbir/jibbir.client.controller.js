(function () {
    "use strict";

    angular.module('app')
        .controller('jibbirController', function ($scope) {
            $scope.test = "test";
        
//         var skylink = new Skylink();

// skylink.on('peerJoined', function(peerId, peerInfo, isSelf) {
//   var user = 'You';
//   if(!isSelf) {
//     user = peerInfo.userData.name || peerId;
//   }
//   addMessage(user + ' joined the room', 'action');
//   console.log(peerInfo);
// });





// // skylink.on('peerUpdated', function(peerId, peerInfo, isSelf) {
// //   if(isSelf) {
// //     user = peerInfo.userData.name || peerId;
// //     addMessage('You\'re now known as ' + user, 'action');
// //   }
// // });

// skylink.on('peerLeft', function(peerId, peerInfo, isSelf) {
//   var user = 'You';
//   if(!isSelf) {
//     user = peerInfo.userData.name || peerId;
//   }
//   addMessage(user + ' left the room', 'action');
// });

// skylink.on('incomingMessage', function(message, peerId, peerInfo, isSelf) {
//   var user = 'You',
//       className = 'you';
//   if(!isSelf) {
//     user = peerInfo.userData.name || peerId;
//     className = 'message';
//   }
//   addMessage(user + ': ' + message.content, className);
// });

// skylink.init('3802100f-0384-4b1b-8a42-c49e38ab178f'); 

// function setName() {
//   var input = document.getElementById('name');
//   skylink.setUserData({
//     name: input.value
//   });
// }

// function joinRoom() {
//   skylink.joinRoom();
// }

// function leaveRoom() {
//   skylink.leaveRoom();
// }

// function sendMessage() {
//   var input = document.getElementById('message');
//   skylink.sendP2PMessage(input.value);
//   input.value = '';
//   input.select();
// }

// function addMessage(message, className) {
//   var chatbox = document.getElementById('chatbox'),
//     div = document.createElement('div');
//   div.className = className;
//   div.textContent = message;
//   chatbox.appendChild(div);
// }
        });
} ());