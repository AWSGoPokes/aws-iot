## Inspiration
At the time of 2010, almost 60 million people, about 19 percent of the population, lived in rural areas of the United States. Rural residents have greater transportation difficulties reaching health care providers, often traveling great distances to reach a doctor or hospital. The patient-to-primary care physician ratio in rural areas is only 39.8 physicians per 100,000 people, compared to 53.3 physicians per 100,000 in urban areas. In addition, rural residents tend to be poorer. On average, per capita income in rural areas is $9,242 lower than the average per capita income in the United States, and rural Americans are more likely to live below the poverty level [according to NRHA]

The situation is even worse in Oklahoma, with 30% of the population living in rural areas. “It takes a long time to get anywhere from Eufaula,” said Joy Sloan, chief executive officer of Green Country Behavioral Health, which operates in Muskogee and McIntosh counties. “And if you don’t have transportation or good transportation, you could be sitting somewhere for a long time waiting for help". Therefore, there is a strong need for an innovative solution to help rural residents in Oklahoma and in America to access healthcare services.

** The motivation to help rural people led us to RuralCare, an innovative mobile app that combines the power of mobile app, cloud computing, and wireless sensors to benefits rural residents and healthcare providers. **

## What it does
RuralCare includes four pillars: Smart Jacket (for rural residents to wear), Amazon AWS Cloud (to store all health data safely), Predictive Model (to predict diseases from data), and Mobile WebApp. All are described in detail as follows:

* Smart Jacket: The prototype Smart Jacket includes textile ECG electrodes and a respiration belt. A single lead ECG signal is collected from the garment using the Lead-II configuration. A sensor platform and an MCU are put into a 3D-printed box integrated in the shirt. The signal is amplified and sampled at a rate of 200Hz, which is sufficient for detecting heart rate, studying heart rate variability, arrhythmias, and other heart-related disorders.
* Amazon AWS Cloud: ECG data is sent wirelessly via Bluetooth Low Energy (BLE) to the SmartJacket mobile app. The mobile app will periodically synchronize data via MQTT protocol to Amazon Cloud (AWS), where remote caregivers or doctor can access to monitor real-time ECG or other health statistic and evaluation in real-time.
* Models: on Cloud, we will build classification and predictive models to make the most out of existing health data (e.g. the model may detect disorders or output early health issue prediction). The model will be smarter over time when more data are available to learn.
* Mobile App: Rural residents/doctors can use Mobile App to see in real-time all the visualized health data. More importantly, the health diagnosis outputs from the predictive models in the cloud are streamed back to the App, and an alert is raised whenever the resident is at risk. The remote caregiver may double check the real-time visualized health data shown in the app, or can set up voice call or video call to the resident. This forms a closed-loop healthcare system that provides timely healthcare delivery services.
## How we built it
### Wearable unit
#### Customized Shirt
#### Sensors

#### Circuit


## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

## What's next for RuralCare
