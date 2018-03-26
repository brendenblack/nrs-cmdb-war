import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'servers-test',
  templateUrl: './servers-test.component.html',
})
export class ServersTestComponent implements OnInit {
	private serverUrl = 'http://localhost:8080/socket';
	private topic = '/topic/crawl';
	private stompClient;

 	constructor() {}

	ngOnInit(): void {
		console.log("Creating SockJS connection to " + this.serverUrl);
		let ws = new SockJS(this.serverUrl);
		this.stompClient = Stomp.over(ws);
		let that = this;
		this.stompClient.connect({}, function(frame) {
			console.log("subscribing to " + that.topic);
			that.stompClient.subscribe(that.topic, (message) => {
				if (message.body) {
					console.log(message.body);	
				}
				else {
					console.log(message);
				}
			});
		});
	}
}