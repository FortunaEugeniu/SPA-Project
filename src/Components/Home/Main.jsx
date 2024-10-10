import RecentPosts from "./RecentPosts";
import FeaturedWorks from "./FeaturedWorks";

import featureImg from "../../assets/featured-Img-1.png";
import featureImgTwo from "../../assets/featured-Img-2.png";
import featureImgThree from "../../assets/featured-Img-3.png";

export default function Main() {
  return (
    <main >
      <div className="bg-sky-100 px-24 py-4 " >
        <div className=" flex justify-between items-center">
          <span className="text-2xl text-gray-800">
            Recent posts
          </span>
          <a href="/posts" className="text-sky-500">
            View all
          </a>
        </div>
        <div className="flex">
          <RecentPosts
            title="Making a design system from scratch"
            date="12 Feb 2020"
            category="Design, Pattern"
            description="Amet minim mollit non deserunt 
              ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. 
              Exercitation veniam consequat sunt nostrud amet."
          />
          <RecentPosts
            title="Creating pixel perfect icons in Figma"
            date="12 Feb 2020"
            category="Figma, Icon Design"
            description="Amet minim mollit non deserunt ullamco
               est sit aliqua dolor do amet sint. Velit officia consequat 
               duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet."
          />
        </div>
      </div>

      <div className="px-24 pt-8">
        <span className="text-2xl text-gray-800">
          Featured Works
        </span>
        <FeaturedWorks
          imgName={featureImg}
          title="Designing Dashboards"
          year="2020"
          category="Dashboard"
          description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedWorks
          imgName={featureImgTwo}
          title="Designing Dashboards"
          year="2019"
          category="Ilustration"
          description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedWorks
          imgName={featureImgThree}
          title="Designing Dashboards"
          year="2018" category="Typography"
          description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </main>
  );
}
