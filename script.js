var typed = new Typed('.auto-typed', {
    strings: ['Self Learner.', 'Font End Developer.', 'Off-Page SEO Expart.'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });


  let download = document.querySelector("#cv-download")
  function downloadCV (){
   const downloadLink = document.createElement("a");
   downloadLink.href = "image/MD. ABDUS SALAM.pdf";
   downloadLink.target = "_blank";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

 