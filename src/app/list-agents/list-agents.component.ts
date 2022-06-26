import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/Interfaces(Modules)/Agent';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.css']
})
export class ListAgentsComponent implements OnInit {

  agents:Agent[];
  errorMessage: any;
  constructor(private adminService:AdminService,private router: Router, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {

    if(this.tokenStorage.getToken()==null){
      this.router.navigate(['admin/logIn']);
    }else{
      this.adminService.findAllAgents().subscribe({
        next: data => {
          this.agents=data;
          console.log(data);
        },
        error: err => {
          this.errorMessage = err.error.message;
         
        }
       
      });
    }
     
    console.log(this.agents);
  }
  goToAgentDetails(agent:Agent){

    
  }

}
