import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { Ma4jay3Component } from './ma4jay3/ma4jay3.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { PokemongoComponent } from './pokemongo/pokemongo.component';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    Ma4jay3Component,
    StudentComponent,
    AddStudentComponent,
    HomeComponent,
    PokemonComponent,
    NotfoundComponent,
    EditStudentComponent,
    PokemongoComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
