import { Injectable } from '@angular/core';

@Injectable()
export class Store { 

    private broadcastMessage: any;
    private JOB: any;
    private USER: any;
    private activity: any = {
        broadcast: false,
        job: false
    }

    private chatCounter: any = {};

    GET_USER(): any {
        return this.USER ? this.USER : JSON.parse(localStorage.getItem('__user__'));
    }

    UPDATE_USER(data): void {
        localStorage.setItem('__user__', JSON.stringify(data));
        this.USER = data;
    }

    DELETE_USER(): void {
        localStorage.removeItem('__user__');
        this.USER = null;
    }

    GET_BROADCAST(): any {
        return this.broadcastMessage;
    }

    UPDATE_BROADCAST(data): void {
        this.broadcastMessage = data;
    }

    GET_JOB(): any {
        return this.JOB;
    }

    UPDATE_JOB(data): void {
        this.JOB = data;
    }

    GET_CHAT_COUNT(conversationId): number {
        let count: number = parseInt(localStorage.getItem(`${conversationId}-count`)) || 0;
        return count ? count : this.chatCounter[conversationId] ? this.chatCounter[conversationId] : 0;
    }

    UPDATE_CHAT_COUNT(conversationId: string, count: number, reset?:boolean): void {
        if(reset){
            this.chatCounter[conversationId] = 0;
            localStorage.setItem(`${conversationId}-count`, "0");
        }else{
            this.chatCounter[conversationId] ? this.chatCounter[conversationId] += count : this.chatCounter[conversationId] = count;
            localStorage.setItem(`${conversationId}-count`, this.chatCounter[conversationId]);
        }
    }

    GET_CHAT(conversation): any[] {
        return JSON.parse(localStorage.getItem(conversation)) || [];
    }

    UPDATE_CHAT(conversation, messages): void {
        localStorage.setItem(conversation, JSON.stringify(messages));
    }

    GET_CHAT_MANIFEST() {
        return JSON.parse(localStorage.getItem('__chat_manifest__')) || {};
    }

    UPDATE_CHAT_MANIFEST(manifest): void {
        localStorage.setItem('__chat_menifest__', JSON.stringify(manifest));
    }

    UPDATE_ACTIVITY(owner: string): void {
        if(owner === 'job'){
            this.activity.job ? this.activity.job = false : this.activity.job = true;
        }
        if(owner === 'broadcast'){
            this.activity.broadcast ? this.activity.broadcast = false : this.activity.broadcast = true;
        }
    }

    GET_ACTIVITY(owner: string): boolean {
        if(owner === 'job')
            return this.activity.job;
        

        if(owner === 'broadcast')
            return this.activity.broadcast;
        
    }
}