import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EndpointService } from '../endpoint.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data: any = [];
  model: any = {};
  id: any;
  base64textStringImage: any;
  newImage: any = ''


  constructor(private router: Router, public endpoint: EndpointService) { }
  ngOnInit() { }
  onSubmmit(form: any) {
    console.log(this.model);
    console.log(form.valid);
    
    if(form.valid){

      this.endpoint.createNew(this.model).subscribe((result: any) => {
        if (result) {
          console.log(result);
          alert('Recored create successfully!')
        }
      })
    }

  }
  errorHandler(event: any) {
    event.target.src = environment.noImg;
  }

  handleFileSelect(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      this.model.image = files[0];
      this.newImage = files[0];
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

    }
  }

  _handleReaderLoaded(readerEvt: any) {
    const binaryString = readerEvt.target.result;
    this.base64textStringImage = btoa(binaryString);
  }
}


