import {Component, OnInit} from '@angular/core';
import {Topic} from './topics';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-topic-bulletin',
  templateUrl: './topic-bulletin.component.html',
  styleUrls: ['./topic-bulletin.component.scss']
})
export class TopicBulletinComponent implements OnInit {
  topics: Topic[];

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection<Topic>('topics').valueChanges().subscribe(topics => {
      this.topics = topics.sort((topicOne, topicTwo) => new Date(topicTwo.date).getTime() - new Date(topicOne.date).getTime());
    });
  }

}
