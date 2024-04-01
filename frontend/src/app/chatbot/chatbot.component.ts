import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/service/api-service.service';
interface Message {
  text: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  constructor(private apiService: ApiServiceService){

  }

  messages: Message[] = [];
  newMessage: string = '';
  welcomeMessage: string = 'Hii I am an Welfare AI Assistant. Please ask any questions about welfare Schemes available in India.';
  ngOnInit() {
    // Simulate a welcome message from the bot when the component initializes
    this.addBotMessage(this.welcomeMessage);
  }

  addBotMessage(text: string): void {
    this.messages.push({ text: text, isUser: false });
    this.scrollToBottom();
  }

 async sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, isUser: true });
      console.log(this.newMessage);

      const obj = {
        'query': this.newMessage
      }
      this.newMessage=''
      

      const details = await this.apiService.chatBot(obj).toPromise();
      console.log(details);

      const oxy = details.predicted_career.replace(/\n/g, '<br>');
      console.log(oxy);
      
      this.messages.push({ text: oxy, isUser: false });
      

      // Simulate bot response (replace this with actual chatbot logic)
      // setTimeout(() => {
      //   this.messages.push({ text: 'This is a sample bot response.', isUser: false });
      //   this.scrollToBottom();
      // }, 500);
      
    }
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
