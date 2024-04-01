import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  showSubCards: boolean = false;
  subCards: any[] = [];

  toggleSubCards(category: string) {
    // Logic to toggle sub-cards and load data based on category
    this.showSubCards = !this.showSubCards;

    // Load sub-cards data based on category
    this.loadSubCardsData(category);
  }

  schemes = [
    { title: 'Govt. Schemes for Social Welfare', category: 'social_welfare' },
    { title: 'Govt. Schemes for Woman and Child', category: 'woman_and_child' },
    { title: 'Govt. Schemes for Infrastructure Development', category: 'infrastructure' },
    { title: 'Govt. Schemes for Economic Development', category: 'economic_development' },
    { title: 'Govt. Schemes for Environment', category: 'environment' },
    { title: 'Govt. Schemes for Healthcare', category: 'healthcare' },
    { title: 'Govt. Schemes for Education and Skill Improvement', category: 'education_and_skill' },
    { title: 'Govt. Schemes for Agricultural Sector and Farmers', category: 'agricultural_sector' },
    { title: 'Govt. Schemes to Generate Employment', category: 'employment' }
  ];

  loadSubCardsData(category: string) {
    // Simulated data for sub-cards based on category
    switch (category) {
      case 'social_welfare':
        this.subCards = [
          { title: 'Nutrition Smart Village', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
          { title: 'Poverty Alleviation Programmes in India', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
          { title: 'Scheme for Economic Empowerment of Denotified, Nomadic, Semi-nomadic (SEED) Tribes', url:'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2022/feb/doc202222519501.pdf' },
          { title: 'Senior Citizen Saving Scheme', url:'https://nsiindia.gov.in/(S(52ak4uunhskmko3wdew10z55))/InternalPage.aspx?Id_Pk=62' },
          { title: 'Annapurna Scheme', url:'https://mahafood.gov.in/website/english/PDS2.aspx#:~:text=under%20this%20scheme%2010%20Kgs,scheme%20or%20state%20pension%20scheme.'},
          { title: 'Indira Gandhi National Old Age Pension Scheme', url:'https://www.myscheme.gov.in/schemes/nsap-ignoaps'},
          { title: 'Indira Gandhi National Disability Pension Scheme', url:'https://www.myscheme.gov.in/schemes/igndps'},
          { title: 'Sabki Yojana Sabka Vikas Scheme' , url:'https://www.sarkariyojnaa.com/sabki-yojana-sabka-vikas/'},
          { title: 'Mission Sagar', url:'https://pib.gov.in/PressReleasePage.aspx?PRID=1796165' },
          { title: 'Bharat Gaurav Scheme', url:'https://www.drishtiias.com/daily-news-analysis/bharat-gaurav-scheme-1' },
          { title: 'Aam Adami Bima Yojana' , url:''},
          { title: 'PMUY', url:''},
          { title: 'Food for Work Programme' , url:''},
          { title: 'Svamitva Yojana', url:''},
          { title: 'Sarva Shiksha Abhiyan', url:'' },
          { title:'National Bal Swachhta Mission' , url:''},
          { title: 'Pradhan Mantri Shram Yogi Maan-Dhan Yojana', url:'' },
          { title: 'Rashtriya Swasthya Bima Yojana', url:''},
          { title: 'Pradhan Mantri Garib Kalyan Yojana', url:'' },
          { title: 'Importance of National Nutrition Mission', url:''},
          { title: 'Mid-day Meal Scheme And Its Challenges' , url:''},
          { title: 'Swachh Bharat Mission', url:'' },
          { title: 'Senior Citizen Saving Scheme', url:'' }
          // Add more sub-cards data as needed
        ];
        break;
        case 'woman_and_child':
          this.subCards =[
            { title: 'Scheme For Adolescent Girls (SAG)', url: 'https://wcd.nic.in/schemes/scheme-adolescent-girls-sag'},
            { title: 'Pradhan Mantri Matru Vandana Yojana', url: 'https://mpwcdmis.gov.in/scheme_pmmvy.aspx#:~:text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A7%E0%A4%BE%E0%A4%A8%20%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AE%E0%A4%BE%E0%A4%A4%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%B5%20%E0%A4%B5%E0%A4%82%E0%A4%A6%E0%A4%A8%E0%A4%BE%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE,%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A4%BE%E0%A4%B5%20%E0%A4%95%E0%A5%8B%20%E0%A4%95%E0%A4%AE%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%E0%A5%A4' },
            { title: 'Integrated Child Development Scheme', url:'https://wcd.nic.in/integrated-child-development-services-icds-scheme' },
            { title: 'Anganwadi Services', url:'https://wcd.nic.in/schemes/anganwadi-services' },
            { title: 'Stree Swabhiman Scheme', url:'https://jaankari.csccloud.in/stree-swabhiman.html'},
            { title: 'Indira Gandhi National Widow Pension Scheme', url:'https://myscheme.gov.in/schemes/ignwps'},
          ];
        break;
        case 'infrastructure':
          this.subCards =[
            { title: 'Heritage City Development And Augmentation Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Special Accelerated Road Development Program in North Eastern Region (SARDP-NE)', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'AMRUT Plan', url:'' },
            { title: 'Samarth Scheme', url:'' },
            { title: 'Security and Growth for All in the Region (SAGAR Program)', url:''},
            { title: 'Ayush Grid Project', url:''},
            { title: 'Government Initiatives and Schemes for North-Eastern Region', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Atal Bhujal Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'Jal Shakti Abhiyan', url:'' },
            { title: 'Gram Uday Se Bharat Uday Abhiyan', url:'' },
            { title: 'PM Gram Sadak Yojana (PMGSY)', url:''},
            { title: 'National Rural Drinking Water Programme', url:''},
            { title: 'National Water Mission', url:'' },
            { title: 'Gramin Bhandaran Yojana or Rural Godown Scheme', url:''},
            { title: 'Rashtriya Gram Swaraj Abhiyan', url:''},
          ];
          break;
        case 'infrastructure':
          this.subCards =[
            { title: 'Heritage City Development And Augmentation Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Special Accelerated Road Development Program in North Eastern Region (SARDP-NE)', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'AMRUT Plan', url:'' },
            { title: 'Samarth Scheme', url:'' },
            { title: 'Security and Growth for All in the Region (SAGAR Program)', url:''},
            { title: 'Ayush Grid Project', url:''},
            { title: 'Government Initiatives and Schemes for North-Eastern Region', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Atal Bhujal Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'Jal Shakti Abhiyan', url:'' },
            { title: 'Gram Uday Se Bharat Uday Abhiyan', url:'' },
            { title: 'PM Gram Sadak Yojana (PMGSY)', url:''},
            { title: 'National Rural Drinking Water Programme', url:''},
            { title: 'National Water Mission', url:'' },
            { title: 'Gramin Bhandaran Yojana or Rural Godown Scheme', url:''},
            { title: 'Rashtriya Gram Swaraj Abhiyan', url:''},
          ];
          break;
        case 'infrastructure':
          this.subCards =[
            { title: 'Heritage City Development And Augmentation Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Special Accelerated Road Development Program in North Eastern Region (SARDP-NE)', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'AMRUT Plan', url:'' },
            { title: 'Samarth Scheme', url:'' },
            { title: 'Security and Growth for All in the Region (SAGAR Program)', url:''},
            { title: 'Ayush Grid Project', url:''},
            { title: 'Government Initiatives and Schemes for North-Eastern Region', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Atal Bhujal Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'Jal Shakti Abhiyan', url:'' },
            { title: 'Gram Uday Se Bharat Uday Abhiyan', url:'' },
            { title: 'PM Gram Sadak Yojana (PMGSY)', url:''},
            { title: 'National Rural Drinking Water Programme', url:''},
            { title: 'National Water Mission', url:'' },
            { title: 'Gramin Bhandaran Yojana or Rural Godown Scheme', url:''},
            { title: 'Rashtriya Gram Swaraj Abhiyan', url:''},
          ];
          break;
        case 'infrastructure':
          this.subCards =[
            { title: 'Heritage City Development And Augmentation Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Special Accelerated Road Development Program in North Eastern Region (SARDP-NE)', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'AMRUT Plan', url:'' },
            { title: 'Samarth Scheme', url:'' },
            { title: 'Security and Growth for All in the Region (SAGAR Program)', url:''},
            { title: 'Ayush Grid Project', url:''},
            { title: 'Government Initiatives and Schemes for North-Eastern Region', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Atal Bhujal Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'Jal Shakti Abhiyan', url:'' },
            { title: 'Gram Uday Se Bharat Uday Abhiyan', url:'' },
            { title: 'PM Gram Sadak Yojana (PMGSY)', url:''},
            { title: 'National Rural Drinking Water Programme', url:''},
            { title: 'National Water Mission', url:'' },
            { title: 'Gramin Bhandaran Yojana or Rural Godown Scheme', url:''},
            { title: 'Rashtriya Gram Swaraj Abhiyan', url:''},
          ];
          break;
        case 'infrastructure':
          this.subCards =[
            { title: 'Heritage City Development And Augmentation Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Special Accelerated Road Development Program in North Eastern Region (SARDP-NE)', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'AMRUT Plan', url:'' },
            { title: 'Samarth Scheme', url:'' },
            { title: 'Security and Growth for All in the Region (SAGAR Program)', url:''},
            { title: 'Ayush Grid Project', url:''},
            { title: 'Government Initiatives and Schemes for North-Eastern Region', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Atal Bhujal Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'Jal Shakti Abhiyan', url:'' },
            { title: 'Gram Uday Se Bharat Uday Abhiyan', url:'' },
            { title: 'PM Gram Sadak Yojana (PMGSY)', url:''},
            { title: 'National Rural Drinking Water Programme', url:''},
            { title: 'National Water Mission', url:'' },
            { title: 'Gramin Bhandaran Yojana or Rural Godown Scheme', url:''},
            { title: 'Rashtriya Gram Swaraj Abhiyan', url:''},
          ];
          break;
        case 'infrastructure':
          this.subCards =[
            { title: 'Heritage City Development And Augmentation Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Special Accelerated Road Development Program in North Eastern Region (SARDP-NE)', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'AMRUT Plan', url:'' },
            { title: 'Samarth Scheme', url:'' },
            { title: 'Security and Growth for All in the Region (SAGAR Program)', url:''},
            { title: 'Ayush Grid Project', url:''},
            { title: 'Government Initiatives and Schemes for North-Eastern Region', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf'},
            { title: 'Atal Bhujal Yojana', url: 'https://www.indiabudget.gov.in/budget_archive/es2004-05/chapt2005/chap103.pdf' },
            { title: 'Jal Shakti Abhiyan', url:'' },
            { title: 'Gram Uday Se Bharat Uday Abhiyan', url:'' },
            { title: 'PM Gram Sadak Yojana (PMGSY)', url:''},
            { title: 'National Rural Drinking Water Programme', url:''},
            { title: 'National Water Mission', url:'' },
            { title: 'Gramin Bhandaran Yojana or Rural Godown Scheme', url:''},
            { title: 'Rashtriya Gram Swaraj Abhiyan', url:''},
          ];

      
    }
  }


  goBack(){
    this.showSubCards = !this.showSubCards;
  }

  navigateToExternalUrl(url: string) {
    window.open(url, '_blank');
  }
  
}
