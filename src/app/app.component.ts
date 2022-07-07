import { Component } from '@angular/core';
import { Components } from './components';
import {StoryblokService} from "./services/storyblok.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cop-project';

  components = Components;
  story = { content: null, name: '' };


  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'], function () {
      location.reload()
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', { version: 'draft' })
      .then(data => this.story = data.story);
  }

  getComponent() {
    if(this.story.content && this.story.content['component']) {
      return this.components[this.story.content['component']];
    }
    return null;
  }
}
