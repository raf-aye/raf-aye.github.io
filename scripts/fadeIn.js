let apps = document.getElementsByClassName("content");
let r = document.querySelector(':root');
apps = Array.from(apps)

const positions = {"dp": ["-150px", "-100px", "discordparty"], "tf2": ["-150px", "-700px", "randomizer"], "bs": ["-750px", "-700px", "brawl"], "sr": ["-750px", "-100px", "space"]}
async function scrollByY(y, time) {
    const start = performance.now()
    const startY = window.scrollY
    const endY = 30;
    if (startY < endY) return;
    while (performance.now() < start + time) {
      const progress = (performance.now() - start) / time
      const setY = startY - y * progress
      console.log(setY)
      if (setY > endY) {
      window.scrollTo(0, startY - y * progress)
      // wait for the next frame
      await new Promise(requestAnimationFrame)
      } else break;
    }
    window.scrollTo(0, endY)
  }

apps.forEach(el => {
    el.addEventListener('click', () => {
        document.getElementById("topDesc").classList.add("translate")
        apps.forEach(async project => {
            if (project != el) return project.classList.add("translate")
            project.classList.add("translateContent")
            const icon = document.getElementById("icon_" + project.id)
            icon.classList.add("translateImg")
            if (project.id == "sr") icon.setAttribute("style", "width: 76%;")
            
            const description = document.getElementById(positions[project.id][2])
            description.style.removeProperty("display");
            description.classList.add("translateDesc")
            r.style.setProperty("--width", positions[project.id][0])
            r.style.setProperty("--height", positions[project.id][1])
            await scrollByY(700, 700)
        })
    })
})
