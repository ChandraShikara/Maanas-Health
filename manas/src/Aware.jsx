import React, { useContext } from 'react'
import ContextApi from './ContextApi';
import './Css/home.css'
const Aware = () => {
  const { tokens } = useContext(ContextApi);
  if (!tokens.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className='awareness'>
      <div className='aware1'>
        <div className='adiv1'>
          <p>      Mental health encompasses a spectrum of conditions, with stress, depression, and anxiety standing out as pervasive challenges. Mental stress, often a response to life's pressures, can escalate into chronic stress, impacting overall well-being. Depression, a mood disorder, goes beyond temporary sadness, causing persistent feelings of hopelessness and apathy. Anxiety, on the other hand, manifests as excessive worry and fear, hindering daily functioning. Together, these conditions constitute a significant global health burden, affecting individuals of all ages and backgrounds. So awareness about mental health is crucial to foster understanding, reduce stigma, and promote timely interventions, emphasizing the importance of support systems, professional help, and self-care practices in cultivating mental resilience.</p>

          <h2>Say No to Anxiety, Depression, Stress</h2>
          <div className='awareimgs'>
            < img title='No Anxiety' src="https://tse4.mm.bing.net/th?id=OIP.DYxf_sqFsXVEgbh-LMch0AHaHa&pid=Api&P=0&h=180" alt="mentalh" height={180} width={210} className='awareimages' />
            <img title='No Depression' src="https://tse3.mm.bing.net/th?id=OIP.tguN_tJTWxx5MyuM8LhbdQAAAA&pid=Api&P=0&h=180" alt="mentalh" height={180} width={210} className='awareimages' />
            <img title='No Stress' src="https://tse4.mm.bing.net/th?id=OIP.dhsH1PZPNxHgxLq-k4DxFwHaH_&pid=Api&P=0&h=180" alt="Calm" height={180} width={210} className='awareimages' />
          </div>
        </div>
        <div className='adiv2'>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/DxIDKZHW3-E"
            title="YouTube Video"
            frameborder="0"
          ></iframe>
        </div >
      </div>
      <div className="statsofmentalhealth">
        <div className='statsandtoys'>
          <h1 style={{textAlign:'center'}}>Stats of Mental Helath Conditions</h1>
          <img src="https://championhealth.co.uk/wp-content/uploads/wellbeing-statistics.jpg" alt="" />
        </div>
        <div className='statsandtoys1'>
          <h2 style={{textAlign:'center'}}>Toys for Reducing Anxiety, Depression and Stress</h2>
         <div>
         <img title='Fidget spinners' src="https://tse1.mm.bing.net/th?id=OIP.BDrpWQBlQ6x07CoyyLZkXgHaHa&pid=Api&P=0&h=180" alt="" />
          <img title='Stress balls' src="https://tse1.mm.bing.net/th?id=OIP.L0P0VamUrZIB-gePQuU6IwHaHa&pid=Api&P=0&h=180" alt="" />
          <img title='Fidget cubes' src="https://tse2.mm.bing.net/th?id=OIP.MH02nyWFtCVm0ACbzx0oJAHaHa&pid=Api&P=0&h=180" alt="" />
         </div>
         <div>
         <img title='Scented stress-relief putty' src="https://tse2.mm.bing.net/th?id=OIP.9P9l8BDaJNkzvYghglxelgHaHa&pid=Api&P=0&h=180" alt="" />
          <img title='Calming sound machines' src="https://tse2.mm.bing.net/th?id=OIP.W6C8cU3gPjf-p8UefBVgRAHaHa&pid=Api&P=0&h=180" alt="" />
          <img title='Squishy toys' src="https://tse2.mm.bing.net/th?id=OIP._vADmrfLBkPuNjwU7ARv9gHaHa&pid=Api&P=0&h=180" alt="" />
         </div>
        </div>
      </div>
      <div className='aware2'>
        <img src="https://preview.redd.it/signs-of-anxiety-v0-vx9sak5xpcy91.png?auto=webp&s=4929d36e2a951581ce1b46038f4f52625eb5b182" alt="Anxiety Symptoms" height={370} width={440} />
        <p>Mental anxiety is a complex emotional state characterized by heightened unease, worry, and fear. Unlike temporary stress, anxiety often persists over time, impacting various facets of an individual's life. Common symptoms include restlessness, irritability, and an overwhelming sense of dread. Physiologically, anxiety can manifest in symptoms such as increased heart rate, muscle tension, and difficulty concentrating.

          The cognitive aspects of anxiety involve persistent negative thoughts and a heightened awareness of potential threats, leading to a cycle of apprehension. Sleep disturbances and changes in appetite are common, further influencing one's overall well-being. Anxiety can vary in intensity, ranging from mild discomfort to debilitating panic attacks.

          Understanding the triggers and underlying causes of anxiety is crucial for effective management. Professional interventions, such as therapy and counseling, provide tools to navigate anxious thoughts and behaviors. Mindfulness techniques, meditation, and deep-breathing exercises are valuable self-help strategies that empower individuals to regain control over their mental state.

          Social support plays a pivotal role in alleviating anxiety, fostering a sense of connection and understanding. Medication may be considered in severe cases. Recognizing the dynamic nature of anxiety and the importance of seeking help are essential steps towards building resilience and achieving mental equilibrium. By embracing a holistic approach to mental health, individuals can cultivate strategies to manage anxiety and lead a more balanced and fulfilling life.





        </p>
      </div>
      <div className='aware2'>
        <img src="https://www.verywellmind.com/thmb/_3b1bgxia1botnCMFRftK9MyVyU=/1100x0/filters:no_upscale():max_bytes(150000):strip_icc()/1066910-top-depression-symptoms-5ae724e38023b90036653091.png" alt="Depression Symptoms" height={370} width={400} />
        <p>Mental depression is a profound and pervasive condition that deeply impacts an individual's emotional and cognitive well-being. It is characterized by persistent feelings of sadness, hopelessness, and a loss of interest in activities that were once pleasurable. Depression extends beyond mere mood fluctuations, often affecting sleep patterns, appetite, and energy levels. Individuals may experience a sense of emptiness or worthlessness, contributing to a negative self-perception.

          Cognitively, depression can lead to difficulties in concentration and decision-making, amplifying feelings of frustration. Physical symptoms, such as fatigue and changes in weight, accompany the emotional and cognitive aspects. The interplay of these dimensions underscores the holistic nature of depression, affecting the mind and body alike.

          Recognizing the symptoms of depression is crucial for early intervention. Seeking professional help, such as therapy or counseling, is vital in developing coping strategies and exploring the root causes of depression. Medication may also be recommended in certain cases. Lifestyle modifications, including regular exercise, a balanced diet, and social engagement, play a pivotal role in alleviating depressive symptoms.

          Building a robust support system and fostering open communication are integral components of managing depression. Understanding that recovery is a gradual process, marked by setbacks and progress, is key. By addressing depression comprehensively and compassionately, individuals can embark on a journey toward mental well-being and a more fulfilling life.





        </p>

      </div>
      <div className='aware2'>

        <img src="https://tse4.mm.bing.net/th?id=OIP.2EPCdgReTSVB-YVfu0o53gHaEK&pid=Api&P=0&h=180" alt="Stress Symptoms" height={370} width={400} />
        <p>Mental health stress is a complex and pervasive phenomenon that arises from various life stressors. It affects individuals differently, manifesting in emotional, physical, and behavioral symptoms. Emotionally, stress can lead to feelings of anxiety, fear, or a sense of being overwhelmed. Physically, it often presents itself through headaches, muscle tension, and fatigue, reflecting the interconnectedness of the mind and body. Behavioral changes may include altered sleep patterns, changes in appetite, or difficulty concentrating.

          The symptoms of stress serve as signals, urging individuals to pay attention to their mental well-being. Ignoring these signals can exacerbate the impact of stress on overall health. Recognizing the importance of stress management is crucial. Seeking support from friends and family, engaging in regular exercise, adopting mindfulness practices, and ensuring adequate sleep are effective strategies. Professional assistance, such as counseling or therapy, can provide valuable coping mechanisms.

          Moreover, lifestyle adjustments, including time management, setting realistic goals, and practicing self-compassion, contribute significantly to stress reduction. Identifying specific stressors and developing coping mechanisms tailored to individual needs enhances resilience. Cultivating a supportive social network and fostering open communication also play pivotal roles in maintaining mental well-being. In essence, understanding and managing stress is a holistic endeavor that encompasses emotional, physical, and behavioral dimensions, promoting a balanced and healthier life.





        </p>

      </div>
      <div className="disease">
        <div className='dise'>
          <h2>Diseases Caused by Anxiety</h2>
          <ul>
            <li>Generalized Anxiety Disorder (GAD)</li>
            <li>Panic Disorder</li>
            <li>Social Anxiety Disorder (Social Phobia)</li>
            <li>Specific Phobias</li>
            <li>Obsessive-Compulsive Disorder (OCD)</li>

            <li>Post-Traumatic Stress Disorder (PTSD)</li>
            <li>Agoraphobia</li>
            <li>Separation Anxiety Disorder</li>
            <li>Selective Mutism</li>
          </ul>

        </div>
        <div className='dise'>
          <h2>Diseases Caused by Depression</h2>

          <ul>
            <li>Major Depressive Disorder</li>
            <li>Persistent Depressive Disorder (Dysthymia)</li>
            <li>Seasonal Affective Disorder (SAD)</li>
            <li>Psychotic Depression</li>
            <li>Postpartum Depression</li>

            <li>Premenstrual Dysphoric Disorder (PMDD)</li>
            <li>Bipolar Disorder</li>
          </ul>
        </div>
        <div className='dise'>
          <h2>Diseases Caused by Stress</h2>

          <ul>
            <li>Cardiovascular diseases</li>
            <li>Immune system dysfunction</li>
            <li>Gastrointestinal issues (e.g., IBS)</li>
            <li>Respiratory problems</li>
            <li>Musculoskeletal disorders </li>
            (e.g., chronic pain, fibromyalgia)
            <li>Endocrine system disruptions</li>
            <li>Sleep disorders</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aware
