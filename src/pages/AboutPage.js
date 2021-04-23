import React from 'react';

export const AboutPage = () => {

  return (
    <>
      <div className="container pt-4"> 
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid">
            <h1 className="display-5 fw-bold">The best React app </h1>
            <p className="col-md-8 fs-4">
              Version app <strong>1.0.42</strong> <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero perferendis commodi quasi, dolores dignissimos veritatis assumenda sint, doloribus iusto mollitia, quas voluptas voluptate aperiam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};