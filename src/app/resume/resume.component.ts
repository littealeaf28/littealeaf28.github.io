import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumeUrl: string = null;

  constructor(private storage: AngularFireStorage) {
    this.storage.ref('Li, Tianrui Resume.pdf').getDownloadURL()
      .subscribe(url => this.resumeUrl = url);
  }

  ngOnInit(): void {
  }

}
