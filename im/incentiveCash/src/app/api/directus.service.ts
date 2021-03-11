import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectusService {

  constructor() { }

  _get(url: string) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ` + token // if access_token is available        
      },
      // body:  JSON.stringify(data)
    }).then(response => {
      return response.json();
    }).catch(error => {
      console.log(error);
    })    
  }

  get(url: string, data: object) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ` + token // if access_token is available        
      },
      body:  JSON.stringify(data)
    }).then(response => {
      return response;
    }).catch(error => {
      console.log(error);
    })
  }

  async post(url: string, data: object) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response;
    }).catch(error => {
      console.log(error);
    })
  }

  async tknPost(url: string, data:any, token: string) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer `+ token
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response;
    }).catch((error) => {
      console.log(error)
    });
  }

  async getTokenId() {
    const url = 'https://incentivedb.minima.global/custom/minima/token';
    return this._get(url);
  }

  async getReferral(uid: string) {
    const url = 'https://incentivedb.minima.global/custom/minima/getReferral';
    return this.post(url, {"userid": uid});
  }

  async getKey(uid: string) {
    const url = 'https://incentivedb.minima.global/custom/utils/getKey';
    return this.post(url, {"userid": uid});
  }

  async postAKey(data: any) {
    const url = 'https://incentivedb.minima.global/custom/minima/key';
    return this.post(url, data);
  }

  async fetchRewards(uid: string) {
    const url = 'https://incentivedb.minima.global/custom/minima/getReward';
    return this.post(url, {"userid": uid});
    
  
  }

}
