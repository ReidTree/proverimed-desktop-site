var app = angular.module('proverimedApp');

app.factory('apiFactory', function(){

  var ExecContacts = [
    {
      "fName": "Michael",
      "lName": "Sparkia",
      "title": "Founder, VP of Operations",
      "mailto": "mailto:msparkia@proverimed.com",
      "email": "MSparkia@proverimed.com",
      "linkedin": "https://www.linkedin.com/in/michaelsparkia/", },
    {
      "fName": "Todd",
      "lName": "Wolffis",
      "title": "Strategy and Solutions Delivery",
      "mailto": "mailto:twolffis@proverimed.com",
      "email": "TWolffis@proverimed.com",
      "linkedin": "https://www.linkedin.com/in/todd-wolffis-5463545/", },
    {
      "fName": "Brian",
      "lName": "Morrill",
      "title": "vCIO",
      "mailto": "mailto:bmorrill@proverimed.com",
      "email": "BMorrill@proverimed.com",
      "linkedin": "https://www.linkedin.com/in/brian-morrill-1b6ba71/", },
    {
      "fName": "Reid",
      "lName": "Trierweiler",
      "title": "Frontend Developer",
      "mailto": "mailto:rtrierweiler@proverimed.com",
      "email": "RTrierweiler@proverimed.com",
      "linkedin": "https://www.linkedin.com/in/reid-trier",
    }];
  var vendorList = [
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
  ];

  var newsArticles = [{
    "id": 'pressTechstars',
    "date": "FOR IMMEDIATE RELEASE: MARCH 5, 2018",
    "author": "Mike Sparkia",
    "company": "Proverimed, LLC",
    "email": "msparkia@proverimed.com",
    "title": "Proverimed, LLC Applies for MetLife Accelerator, Powered by TechStars",
    "shortTitle": "Press Release: TechStars",
    "subTitle": "Company looks to further its disruption of legacy systems within the insurance industry",
    "bold": "Lansing, MI:",
    "paragraphs": [
      "Today, Proverimed, LLC, applied for participation in the MetLife Digital Accelerator, powered by TechStars. The accelerator will focus on innovating in the insurance industry - an industry of massive size & reach with global insurance premiums of $4.5 trillion in 2015. MetLife is a powerhouse as a Fortune 42 company & one of the world’s leading financial services companies with operations in over 40 countries. The program will focus on innovations in health & wellness, the gig & sharing economy, benefits marketplaces, underwriting, etc.", " "],
    "about": ["About Proverimed, LLC:"," Proverimed is an online clearinghouse addressing the manual work being performed by insurance carriers, nationwide, when responding to liability insurance coverage and claims history requests from credentials verification organizations, health plans, hospitals, and other companies that need to verify coverage of the health care providers seeking privileges to see patients through those entities."],
  },{
    "id": 'pressWolffis',
    "date": "FOR IMMEDIATE RELEASE: OCTOBER 18, 2017",
    "author": "Mike Sparkia",
    "company": "Proverimed, LLC",
    "email": "msparkia@proverimed.com",
    "title": "Proverimed, LLC Welcomes New Partner/VP",
    "shortTitle": "Welcomes New VP",
    "subTitle": "Company looks toward experienced leader to expand business development",
    "bold": "Lansing, MI:",
    "paragraphs": [
      "Today, Proverimed, LLC, welcomed Todd Wolffis as a partner and Executive VP of Business Development within the company. One of the original founders, Mike Sparkia, said, \"Todd is a great edition to Proverimed's leadership team, and I am excited to tap into his expertise as relates to start-up development and business growth. Over his career, Todd has developed a lot of relationships with business leaders in West Michigan, with expansive knowledge of various markets. Todd is going to be a great partner.\"",
      "Mr. Wolffis will begin working with Proverimed immediately, and focus on raising capital, and building mutually beneficial relationships with third-party vendors, as Proverimed continues its growth."],
    "about": ["About Proverimed, LLC:"," Proverimed is an online clearinghouse addressing the manual work being performed by insurance carriers, nationwide, when responding to liability insurance coverage and claims history requests from credentials verification organizations, health plans, hospitals, and other companies that need to verify coverage of the health care providers seeking privileges to see patients through those entities."],
  },{
    "id": 'pressCapital',
    "date": "FOR IMMEDIATE RELEASE: MAY 19, 2016",
    "author": "Mike Sparkia",
    "company": "Proverimed, LLC",
    "email": "msparkia@proverimed.com",
    "title": "Proverimed, LLC Raises Capital",
    "shortTitle": "Raises Capital",
    "subTitle": "Company focusing on automation of process, receives first round of funding",
    "bold": "Lansing, MI:",
    "paragraphs": [
      "Today, Proverimed, LLC, received its first round of capital funding which will help drive its mission, build partnerships with appropriate IT vendors capable of supporting a nationwide clearinghouse, and create its corporate infrastructure to move the company to the next phase of growth.",
      'Mike Sparkia, one of the firm\'s founders, said, "We\'re excited we have the capital backing necessary to move forward, but more importantly, the support and belief from our investors in our vision."'],
    "about": ["About Proverimed, LLC:"," Proverimed is an online clearinghouse addressing the manual work being performed by insurance carriers, nationwide, when responding to liability insurance coverage and claims history requests from credentials verification organizations, health plans, hospitals, and other companies that need to verify coverage of the health care providers seeking privileges to see patients through those entities."],
  }, {
    "id": 'pressIncorporation',
    "date": "FOR IMMEDIATE RELEASE: MARCH 30, 2016",
    "author": "Mike Sparkia",
    "company": "Proverimed, LLC",
    "email": "msparkia@proverimed.com",
    "title": "Proverimed, LLC Incorporates",
    "shortTitle": "Incorporates",
    "subTitle": "Primary verification source company opens its doors",
    "bold": "Lansing, MI:",
    "paragraphs": [
      "Today, Proverimed, LLC, filed incorporation forms with the Michigan Department of Licensing and Regulatory Affairs (LARA). The company will work toward combating legacy processes within the insurance industry to increase insurance carriers' operational efficiencies via automation.", "Proverimed wants to remove the need for insurance carriers to manually fulfill verification of insurance requests, by automating the primary source verification process. Through automation, Proverimed reduces administrative overhead, accelerates turn-around-times in verifying a provider's coverage, and enhances the insured's confidentiality of their policy information and claims history. "],
    "about": ["About Proverimed, LLC:"," Proverimed is an online clearinghouse addressing the manual work being performed by insurance carriers, nationwide, when responding to liability insurance coverage and claims history requests from credentials verification organizations, health plans, hospitals, and other companies that need to verify coverage of the health care providers seeking privileges to see patients through those entities."],
  }, ]

  var pricingIcons = [{"title": "participation", "img": "../images/participation.png"},{"title": "insurance", "img": "../images/insurance.png"},{"title": "appointment", "img": "../images/appointment.png"}]


  var aboutProverimed = {"title": "About Proverimed, LLC", "content": "Proverimed is an online clearinghouse addressing the manual work being performed by insurance carriers, nationwide, when responding to liability insurance coverage and claims history requests from credentials verification organizations, health plans, hospitals, and other companies that need to verify coverage of the health care providers seeking privileges to see patients through those entities.", }

  return {
    vendorList: vendorList,
    ExecContacts: ExecContacts,
    newsArticles: newsArticles,
    pricingIcons: pricingIcons,
    aboutProverimed: aboutProverimed,
  };

});
