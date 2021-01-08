import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { exit } from 'process';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController,private router:Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  pet1(){
    this.router.navigate(['/pet1']);
  }

  pet2() {
    this.router.navigate(['/pet2']);
  } 

  change(){
    this.router.navigate(['/change']);
  }

  ok(){

  }

  async exit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sure to exit?',
      buttons: ['Cancel', 'Ok']
    });

    await alert.present();
}


}
