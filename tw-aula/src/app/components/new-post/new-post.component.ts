import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
	tweetMessage: string=""
	tweetMaxLenght: number = 240
	tweetRemain: number = this.tweetMaxLenght

	sendTweet(){
		alert(this.tweetMessage)
	}

	changeTweet(){
		this.tweetRemain = 240 - this.tweetMessage.length
	}
}
