import React from 'react';
import Icons from './Icons';

function About() {
  return (
    <section id='about-me'>
      <h2>A little more about me</h2>
      <p>
        I am a full-stack developer based in Manhattan. In addition to my
        programming work, I have 7+ years experience in CPG, and 10+ years
        experience in the performing arts.
      </p>
      <p>
        I am passionate about building elegant and intuitive solutions to the
        task at hand - whether it be optimizing workflow, connecting with an
        audience, or exploring a hobby. I comfortable working across the entire
        stack, and love taking the journey from abstract idea to practical
        execution. If you have a project in mind, or simply want to inquire
        further - get in touch and let's chat soon!
      </p>
      <h3 id='tools'>Tools that I use</h3>
      <p>
        <Icons
          tech={[
            'html',
            'css',
            'js',
            'react',
            'bootstrap',
            'bulma',
            'tailwind',
            'node',
            'mysql',
            'mongo',
            'k8s',
            'docker',
            'netlify',
            'heroku',
            'aws',
            'gcloud',
            'github',
          ]}
        />
      </p>
    </section>
  );
}

export default About;
