import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
	username: string = "";
	login: string = "";
	public_repos: number;
	followers: number;
	score: number;
	avatar = "";


  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

	getUsername() {
		console.log(this.username);
		this._apiService.requestUsername(this.username).then((data) =>{
			console.log(data);
			this.login = data.login;
			this.public_repos = data.public_repos;
			this.followers = data.followers;
			this.avatar = data.avatar_url;
			this.score = data.public_repos * data.followers;
		})
	}

}
