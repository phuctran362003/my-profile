var github = "https://github.com/phuctran362003";
var email = "mailto:trangiaphuc362003181@gmail.com";
var phone = "tel:+84393734206";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Phuc! 👋</span>`,
  "<br>",
  `<li>🔧 I'm a .NET Developer & DevOps Engineer at FPT Software.</li>`,
  `<li>💡 Passionate about building scalable backend systems and implementing CI/CD pipelines.</li>`,
  `<li>🧠 Experienced in ASP.NET Core, Entity Framework, and cloud technologies.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to check out my work!</li>`,
  `<li>👥 Looking to collaborate on .NET and DevOps projects.</li>`,
  `<li>📫 Contact: <a href="mailto:trangiaphuc362003181@gmail.com">trangiaphuc362003181@gmail.com</a></li>`,
  "</div>",
  "<br>",
];

let contact = [
  "<br>",
  'email     <a href="' + email + '" target="_blank">trangiaphuc362003181@gmail.com</a>',
  'phone     <a href="' + phone + '" target="_blank">+84-393734206</a>',
  'github    <a href="' + github + '" target="_blank">github/phuctran362003</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Who am I and what I do
<span class="command">skills</span>
↳ View my technical skills
<span class="command">projects</span>
↳ View my notable projects
<span class="command">contact</span>
↳ Display contact information
<span class="command">theme</span>
↳ Toggle between themes
<span class="command">history</span>
↳ View command history
<span class="command">help</span>
↳ Show this help message
<span class="command">clear</span>
↳ Clear the terminal
</pre></div><br>`,
];

let skills = [
  "<br>",
  `<div id="skills-section">`,
  `<span class='underline'>Technical Skills</span>`,
  "<br>",
  `<pre class="indent-8 whitespace-pre-wrap">
Programming:
- C# (.NET): Intermediate (20 months)
- ASP.NET Core: Intermediate (12 months)
- Entity Framework: Intermediate (20 months)

Database:
- SQL Server: Intermediate (6 months)
- PostgreSQL: Intermediate (4 months)
- Redis: Intermediate (4 months)

Design & Architecture:
- RESTful API: Intermediate (12 months)
- GraphQL: Beginner (4 months)
- Clean Architecture
- Repository Pattern

DevOps & Tools:
- Docker
- Git
- Nginx
- MinIO
- CI/CD

Project Management:
- Jira (Basic)
- Trello (Basic)
</pre>`,
  "</div>",
  "<br>",
];

let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<span class='underline'>BlindTreasure - E-commerce and Mystery Box Platform</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A B2B2C e-commerce platform integrating mystery shopping mechanics with secure payment processing.
Key Features:
- Multi-role system (admin, seller, staff, customer)
- Transparent drop rates
- Inventory management
- Resale marketplace
- PCI DSS-compliant payments
Tech Stack: .NET, NextJS, MinIO, Redis, PostgreSQL, Docker
</pre>`,

  `<span class='underline'>ArWoh - Artwork High Quality Store</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Digital platform connecting artists worldwide for premium art products distribution.
Key Features:
- Artist profiles and portfolios
- Artwork management
- Order processing
- Payment integration
Tech Stack: .NET, ReactJS, MinIO, GraphQL, MSSQL, Docker
</pre>`,

  `<span class='underline'>VaccinaCare - Medical Vaccination Center</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Pediatric vaccination management system with automated scheduling and tracking.
Key Features:
- Appointment scheduling
- Vaccination tracking
- Automated reminders
- Analytics dashboard
Tech Stack: .NET, ReactJS, GraphQL, MSSQL, Docker
</pre>`,
  "</div>",
  "<br>",
];

let theme = [
  "<br>",
  "<span class='color2'>Theme changed successfully!</span>",
  "<br>",
];

let commands = {
  help: help,
  aboutme: aboutme,
  skills: skills,
  projects: projects,
  contact: contact,
  theme: function() {
    toggleTheme();
    return theme;
  },
  clear: function() {
    document.getElementById('terminal').innerHTML = '';
    return '';
  },
  history: function() {
    let history = "<br>";
    let commands = commandHistory.slice().reverse();
    for(let i = 0; i < commands.length; i++) {
      history += `${i + 1}: ${commands[i]}<br>`;
    }
    return [history, "<br>"];
  }
};
