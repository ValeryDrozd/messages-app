import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagePageComponent } from './pages/message-page/message-page.component';

const routes: Routes = [{ path: '', component: MessagePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
