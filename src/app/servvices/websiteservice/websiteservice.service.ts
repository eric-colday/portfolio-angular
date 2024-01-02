import { Injectable } from '@angular/core';
import { Data } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class WebsiteserviceService { 
  protected dataList: Data[] = [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    }
  ];

  constructor() { }

  getDataList(): Data[] {
    return this.dataList;
  }

  getDataById(id: number): Data | undefined {
    return this.dataList.find((data) => data.id === id);
  }
}
