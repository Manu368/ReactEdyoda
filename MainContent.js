import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './MainContent.css';


function Body01(){
    return(
        <div className="container pb-5">
            <h1 className="heading02 pt-5">Trending Posts</h1>
        <div className="row">
            <div className="col-8">
                <img src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" className="image01 mt-2"></img>
            </div>
            <div className="col-4">
                <img src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg" className="image02 mt-2"></img>
                <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg" className="image03 mt-3"></img>
            </div>
        </div>
        <h3 className="heading02 pt-5">Latest Posts</h3>
        <div className="d-flex flex-row">
        <i class="fa-solid fa-filter icon01 mt-2 pe-3"></i>
        <p className="p02 mt-1">Filter by Category</p>
        </div>
        <button className="button02">All</button>
        <button className="button03">Artificial Intelligence</button>
        <button className="button03">Cloud Computing</button>
        <button className="button03">DevOps</button>
        <button className="button03">Programming Languages</button>
        <button className="button03">Mobile Application Development</button>
        <button className="button03">Technology and Tools</button>
        <button className="button03">Get a Job in a Tech Company</button>
        <button className="button03">Others</button>

        <div className="row mt-3">
            <div className="col-12 col-md-4 mb-4">
            <div className="card">
  <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Fresh Graduate or IT professional Looking for a job ?</h5>
    <p className="card-text card-text01">Arman Ahmed <span className="span01">| 05 Jul 2019</span></p>
    <p className="text02">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
</div>
<div className="col-12 col-md-4 mb-4">
<div className="card">
  <img src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Introducing you all to Edyoda - www.edyoda.com</h5>
    <p className="card-text card-text01">Arman Ahmed <span className="span01">| 05 Jul 2019</span></p>
    <p className="text02">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
</div>
<div className="col-12 col-md-4 mb-4">
            <div className="card">
  <img src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">From identity crisis to the Success Story - The..</h5>
    <p className="card-text card-text01">Kalyan Mahalingam <span className="span01">| 27 Jul 2019</span></p>
    <p className="text02">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
</div>
<div className="col-12 col-md-4 mb-4">
            <div className="card">
  <img src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Typical day of Data Scientist - An insider story!</h5>
    <p className="card-text card-text01">Sourav Ghosh <span className="span01">| 25 Jul 2019</span></p>
    <p className="text02">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
</div>
<div className="col-12 col-md-4 mb-4">
            <div className="card">
  <img src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Amazon Web Services (AWS) Cloud Day - Bangalore</h5>
    <p className="card-text card-text01">Kalyan Mahalingam <span className="span01">| 05 Jul 2019</span></p>
    <p className="text02">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
</div>
<div className="col-12 col-md-4 mb-4">
            <div className="card">
  <img src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">edyoda Meetup # 01: A Date with Cloud</h5>
    <p className="card-text card-text01">Ashish Pandey <span className="span01">| 05 Jul 2019</span></p>
    <p className="text02">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

</p>
  </div>
</div>
</div>
            
        </div>
        </div>
    )
}

export default Body01;