import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  editedUser: User;
  users: Array<User>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: UserService) {
    this.users = new Array<User>();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  //загрузка пользователей
  private loadUsers() {
    this.serv.getUsers().subscribe((data: User[]) => {
            this.users = data; 
        });
  }
  
  // добавление пользователя
  addUser() {
    this.editedUser = new User(0,"", "", 0);
    this.users.push(this.editedUser);
    this.isNewRecord = true;
  }
  
  // редактирование пользователя
  editUser(user: User) {
    this.editedUser = new User(user.id, user.name, user.username, user.email);
  }

  // загружаем один из двух шаблонов
  loadTemplate(user: User) {
    if (this.editedUser && this.editedUser.id === user.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
  }

  // сохраняем пользователя
  saveUser() {
    if (this.isNewRecord) {
        // добавляем пользователя
        this.serv.createUser(this.editedUser).subscribe(data => {
            this.statusMessage = 'Данные успешно добавлены',
            this.loadUsers();
        });
        this.isNewRecord = false;
        this.editedUser = null;
    } else {
        // изменяем пользователя
        this.serv.updateUser(this.editedUser).subscribe(data => {
            this.statusMessage = 'Данные успешно обновлены',
            this.loadUsers();
        });
        this.editedUser = null;
    }
  }

  // отмена редактирования
  cancel() {
      // если отмена при добавлении, удаляем последнюю запись
      if (this.isNewRecord) {
          this.users.pop();
          this.isNewRecord = false;
      }
      this.editedUser = null;
  }

  // удаление пользователя
  deleteUser(user: User) {
      this.serv.deleteUser(user.id).subscribe(data => {
          this.statusMessage = 'Данные успешно удалены',
          this.loadUsers();
      });
  }

}
