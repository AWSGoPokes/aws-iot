# Smart Jacket for Rural Healthcare

[Competition Requirement](announcement.md)

## I.App Name (Can be revised later) *
SmartJacket

## II. Describe your app idea (500 words or less) *
At the time of 2010, almost 60 million people, about 19 percent of the population, lived in rural areas of the United States. Rural residents have greater transportation difficulties reaching health care providers, often traveling great distances to reach a doctor or hospital. The patient-to-primary care physician ratio in rural areas is only 39.8 physicians per 100,000 people, compared to 53.3 physicians per 100,000 in urban areas. In addition, rural residents tend to be poorer. On average, per capita income in rural areas is $9,242 lower than the average per capita income in the United States, and rural Americans are more likely to live below the poverty level [according to NRHA]

The situation is even worse in Oklahoma, with 30% of the population living in rural areas. “It takes a long time to get anywhere from Eufaula,” said Joy Sloan, chief executive officer of Green Country Behavioral Health, which operates in Muskogee and McIntosh counties. “And if you don’t have transportation or good transportation, you could be sitting somewhere for a long time waiting for help". Therefore, there is a strong need for an innovative
solution to help rural residents in Oklahoma and in America to access healthcare services.

The motivation to help rural people led us to SmartJacket, an innovative mobile app that combines the power of mobile app, cloud computing, and wireless sensors to benefits rural residents and healthcare providers. Our solution includes four pillars: Smart Jacket (for rural residents to wear), Amazon AWS Cloud (to store all health data safely), Predictive Model (to predict diseases from data), and Mobile App. All are described in detail as follows:
* 1. Smart Jacket: The prototype Smart Jacket includes textile ECG electrodes and a respiration belt. A single lead ECG signal is collected from the garment using the Lead-II configuration. A sensor platform and an MCU are put into a 3D-printed box integrated in the shirt. The signal is amplified and sampled at a rate of 200Hz,  which is sufficient for detecting heart rate, studying heart rate variability, arrhythmias, and other heart-related disorders. 
* 2. Amazon Cloud: ECG data is sent wirelessly via Bluetooth Low Energy (BLE) to the SmartJacket mobile app. The mobile app will periodically synchronize data via MQTT protocol to Amazon Cloud (AWS), where remote caregivers or doctor can access to monitor real-time ECG or other health statistic and evaluation in real-time.
* 3. Models: on Cloud, we will build classification and predictive models to make the most out of existing health data (e.g. the model may detect disorders or output early health issue prediction). The model will be smarter over time when more data are available to learn.
* 4. Mobile App: Rural residents/doctors can use Mobile App to see in real-time all the visualized health data. More importantly, the health diagnosis outputs from the predictive models in the cloud are streamed back to the App, and an alert is raised whenever the resident is at risk. The remote caregiver may double check the real-time visualized health data shown in the app, or can set up  voice call or video call to the resident. This forms a closed-loop healthcare system that provides timely healthcare delivery services. 

## III. What consumer or market problem will this App solve? (200 words or less) *
This innovation targets to solve two problems in rural healthcare. 
* The first problem is that rural residents have greater transportation difficulties reaching health care providers. With SmartJacket, the rural residents do not need to go to the hospital to make a test/diagnosis. Instead, he/she wears the Smart Jacket, book a voice/video call with the doctor/physician and both residents and doctor/physician can see the visualized data in real-time.
* The second problem is that rural residents tend to be poorer. They can not afford the cost of many healthcare services (even simple like ECG) at the hospital. SmartJacket provides a cheap solution for them. ECG sensors (and many other wearable health sensors) are becoming cheaper and cheaper while the mobile app itself is free. 

## IV. Describe briefly why is there a need for this App? (200 words or less) *
There is a strong need for this App in rural healthcare. At the time of 2010, almost 60 million people, about 19 percent of the population, lived in rural areas of the United States. The situation is even worse in Oklahoma, with 30% of the population living in rural areas. The obstacles faced by health care providers and patients in rural areas are vastly different than those in urban areas. Economic factors, cultural and social differences, educational shortcomings, lack of recognition by legislators and the sheer isolation of living in remote areas all conspire to create health care disparities and impede rural Americans in their struggle to lead normal, healthy lives [according to NRHA]. 
As far as our knowledge, so far there is no existing solutions that effectively help rural residents to access high quality healthcare remotely with an affordable price. On the other hand, healthcare providers also need a solution to reach a wider range of rural residents who currently are too far from them. 
Therefore, we believe that our solution can be very important to both rural residents and healthcare providers.

## V. Are there similar Apps in the market, if yes, what makes this App idea unique? (200 words or less) *
* Brian Turyabagye [biomedical smart jacket](http://www.cnn.com/2017/10/24/africa/biomedical-jacket-uganda-africa-tech-rising/index.html)
A smart jacket that measures body temperature, heart rate and lung condition. The jacket is connected to a mobile phone app via Bluetooth which sends, records and analyses the medical data, ready for a healthcare professional to make an informed diagnosis. Currently, the jacket is still in the prototype phase.
The idea is close to our Smart Jacket and they are also in the prototype phase as we are. However, we believe that to serve thousands to millions rural residents, all the data and processing (training and runing models) have to be hosted on the Cloud. Besides, our type of sensors, the jacket industrial design to bring comfort to users, the specific predictive models and mobile app design are all different from them

## VI. Describe the typical user for this app?    *
Currently, we target to rural residents and healthcare providers in America. However, the solution can be extended to whoever need a remote and high quality healthcare services with an affordable price.
## VII. Who will pay for the App? *
Healthcare provider
Insurance companies 
