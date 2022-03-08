import { Outlet,Link} from "react-router-dom";
const Sunday = () => {

    return(
       
        <>
        <div className="Sunday-Page">
        <div className="container">
        <div className="row" >
    
        <div className="col" >
        <div class="card">
        <img class="card-img-sun1" src="https://cms.qz.com/wp-content/uploads/2021/10/axieinfinityfeature.png?quality=75&strip=all&w=1200&h=900&crop=1" alt="Axie Infinity Image"/>
        <div class="card-body">
            <h5 class="card-title text-dark">Axie Infinity</h5>
            <p class="card-text text-dark"> Axie Infinity is an NFT-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy.  </p>
            
        </div>
        </div>
        </div>
        <div className="col">
        <div class="card" >
        <img class="card-img-sun2" src="https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/271202665_131828812645152_2564528773462486491_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8oDJ_wHRhYoAX_LN9tY&_nc_ht=scontent.fmnl2-2.fna&oh=00_AT-p2EMGXWeYOLa64c6c0Lvr3LpQ5skcs-GTwzlUSBASkQ&oe=622ACE18" alt="Julia's Photo"/>
        <div class="card-body">
            <h5 class="card-title text-dark">Client Meeting</h5>
            <p class="card-text text-dark">Discussed an insurance plan with a journalist who wants her senior parents be protected. Also realized that insurance for seniors are SO expensive.</p>
        
        </div>
        </div>
        </div>

        <div className="col">
        <div class="card" >
        <img class="card-img-sun3" src="https://i.redd.it/9s2qwmzkpfh51.jpg" alt="Meme Photo"/>
        <div class="card-body">
            <h5 class="card-title text-dark">Cleaning my room</h5>
            <p class="card-text text-dark">I used to clean my room for at least once a week. But now that ojt and classes are almost taking my whole time, im getting lazier each time i clean my room. </p>
            
        </div>
        </div>
        </div>
</div>
</div>
{/* end of first row*/}
<br/><br/><br/><br/>
{/* Start of first row*/}
<div className="container">
        <div className="row" >
    
        <div className="col" >
        <div class="card" >
        <img class="card-img-sun1" src="https://blackhelios.files.wordpress.com/2020/12/img_20201217_223248.jpg?w=768" alt="Samgyup Photo"/>
        <div class="card-body">
            <h5 class="card-title text-dark">Samgyup</h5>
            <p class="card-text text-dark"> Although the service where my friends and I ate is not the best, I stil enjoyed my time eating and talking with them. Also, the place were full of dogs and it made me want to bring my poodles. </p>
            
        </div>
        </div>
        </div>
        <div className="col">
        <div class="card" >
        <img class="card-img-sun2" src="https://assets-prd.ignimgs.com/2022/01/26/thebatman-newbutton-1643232430643.jpg" alt="Batman Poster"/>
        <div class="card-body">
            <h5 class="card-title text-dark">Batman</h5>
            <p class="card-text text-dark">Me and my friends watched the new Batman starring Robert Pattinson and Zoe Kravitz. I love the actors but the story is just the same as every plain DC movie.</p>
        
        </div>
        </div>
        </div>

        <div className="col">
        <div class="card" >
        <img class="card-img-sun3" src="https://i.insider.com/515b266a69bedd6e54000003?width=700" alt="HIMYM Photo"/>
        <div class="card-body">
            <h5 class="card-title text-dark">Catching Up</h5>
            <p class="card-text text-dark">Catching up with friends after a long week is a must! I put the image of "How I Met Your Mother" for reference. Also, no one asked but i prefer How I Met Your Mother than F.R.I.E.N.D.S  </p>
            
        </div>
        </div>
        <br/><br/><br/>
        </div>
       
        <div class="card text-center">
        
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Julia's Special Weekend</h5>
                <p class="card-text">MalayBalay Bukidnon Trip from February 25 - February 27 2022</p>
                <Link to ="/Special" className="Special" aria-current="page">
                <a href="#Bukidnon" class="btn btn-primary">View More</a>
                </Link>   
            </div>
            <div class="card-footer text-muted">
                2 weeks ago
            </div>
        </div>
        
</div>
</div>
</div>
</>
)
}
export default Sunday;