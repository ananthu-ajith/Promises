import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  dataarr:any[]=[]
  constructor(private comm:DataService){}
  abcde()
  {
    this.comm.getdetails().subscribe((data:any)=>{
      this.dataarr=data
      console.log(this.dataarr);
      
    })

    
  }

  abc()
  {
    if(this.dataarr.length!=0)
      {
    Swal.fire({
      title: "Are you sure?",
      text: "Click Continue to delete the table",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continue"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.dataarr=[]
      }
    });
  }
  else
  {
    Swal.fire({
      title: "No Data Found",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
    
  }

}
