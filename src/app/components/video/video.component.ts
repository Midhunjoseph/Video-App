import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VcConstants } from 'src/app/utils/vc-Constants';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  public audioEnabled: boolean = true;
  public videoEnabled: boolean = true;
  public remoteStreams: MediaStream[] = [];

  constructor(private router: Router,
    private vcConstants: VcConstants){}

  ngOnInit(): void {
      this.startVideo()
  }

  public startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        this.localVideo.nativeElement.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing camera and microphone:', error);
      });
  }

  public toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    const stream = this.localVideo.nativeElement.srcObject as MediaStream;
    stream.getAudioTracks().forEach(track => {
      track.enabled = this.audioEnabled;
    });
  }

  public toggleVideo() {
    this.videoEnabled = !this.videoEnabled;
    const stream = this.localVideo.nativeElement.srcObject as MediaStream;
    stream.getVideoTracks().forEach(track => {
      track.enabled = this.videoEnabled;
    });
  }

  public endCall() {
    // Stop local media tracks
    const localStream = this.localVideo.nativeElement.srcObject as MediaStream;
    localStream.getTracks().forEach(track => track.stop());

    // Stop remote media tracks
    this.remoteStreams.forEach(remoteStream => {
        remoteStream.getTracks().forEach(track => track.stop());
    });

    // Clear remote streams
    this.remoteStreams = [];
    this.router.navigateByUrl(this.vcConstants.web_router_link.home)
}
}
