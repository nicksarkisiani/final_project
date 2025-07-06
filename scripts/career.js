const API_URL = "https://jobicy.com/api/v2/remote-jobs";
const MAX_COUNT = 20;

const jobsContainer = document.querySelector('.career__jobs');


document.addEventListener('DOMContentLoaded', handleJobs);

async function handleJobs ()  {
    try {
        const data = await fetchJobs();
        if(!data || !data.length) {
            jobsContainer.appendChild(generateError());
            return;
        }

        renderData(data);
    } catch (e) {
        console.error("Error", e);
        jobsContainer.appendChild(generateError());
    }

}

const fetchJobs = async () => {
    let localStorageJobs;
    if(document.cookie.includes('isActive')) localStorageJobs = JSON.parse(localStorage.getItem("jobs"));

    if (!Array.isArray(localStorageJobs) || localStorageJobs.length === 0) {
        const res = await fetch(`${API_URL}?count=${MAX_COUNT}`);
        const jobs = (await res.json()).jobs;

        if (!Array.isArray(jobs) || !jobs.length) {
            return null;
        }

        if(document.cookie.includes('isActive')) localStorage.setItem("jobs", JSON.stringify(jobs));
        return jobs;
    }

    return localStorageJobs;

}

function renderData (jobs)  {
    jobs.forEach(({jobTitle}) => {
        const title = decodeHTMLEntities(jobTitle);
        const job = renderJobTitle(title);
        jobsContainer.appendChild(job);

    })

}

function decodeHTMLEntities (text) {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    let firstPass = txt.value;

    txt.innerHTML = firstPass;
    return txt.value;
}


function renderJobTitle(title) {

    const div = document.createElement('div');
    div.classList.add('career__job');

    const text = document.createElement('h2');
    text.textContent = title;

    const button = document.createElement('a');
    button.textContent = "Read More";
    button.href = "career/accountmanager.html"

    div.appendChild(text);
    div.appendChild(button);
    return div;
}

function generateError () {
    const h2 = document.createElement('h2');
    h2.textContent = "No jobs found :(";
    h2.classList.add('career__error');
    return h2;
}