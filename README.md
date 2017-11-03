# Smart Jacket for Rural Healthcare

[Competition Requirement](announcement.md)

## I.App Name (Can be revised later) *
SmartJacket

## II. Describe your app idea (500 words or less) *
At the time of 2010, almost 60 million people, about 19 percent of the population, lived in rural areas of the United States. Rural residents have greater transportation difficulties reaching health care providers, often traveling great distances to reach a doctor or hospital. The patient-to-primary care physician ratio in rural areas is only 39.8 physicians per 100,000 people, compared to 53.3 physicians per 100,000 in urban areas. In addition, rural residents tend to be poorer. On average, per capita income in rural areas is $9,242 lower than the average per capita income in the United States, and rural Americans are more likely to live below the poverty level [according to NRHA]

The situation is even worse in Oklahoma, with 30% of the population living in rural areas. “It takes a long time to get anywhere from Eufaula,” said Joy Sloan, chief executive officer of Green Country Behavioral Health, which operates in Muskogee and McIntosh counties. “And if you don’t have transportation or good transportation, you could be sitting somewhere for a long time waiting for help". Therefore, there is a strong need for an innovative
solution to help rural residents in Oklahoma and in America to access healthcare services.

The motivation to help rural people led us to SmartJacket, an innovative mobile app that combines the power of mobile app, cloud computing, and wireless sensors to benefits rural residents and healthcare providers. Our solution includes four pillars: Smart Jacket (for rural residents to wear), Amazon AWS Cloud (to store all health data safely), Predictive Model (to predict diseases from data), and Mobile App. All are described in detail as follows:
* 1. Smart Jacket: in the laboratory, we already built the Smart Jacket attached with Electrocardiogram (ECG) sensors to assess the electrical and muscular functions of the heart. The ECG has grown to be one of the most commonly used medical tests in modern medicine. 
* 2. Amazon Cloud: ECG sensors will send data wirelessly (via Bluetooth Low Energy or BLE) to an Arduino board. This board will synchronize data to Amazon Cloud (AWS) via MQTT protocol periodically. 
* 3. Models: on Cloud, we will build predictive models to make the most out of existing health data (e.g. the model can early predict when a resident is in sick and alert them). The model will be smarter over time when more data are available to learn.
* 4. Mobile App: Rural residents/doctors can use Mobile App to see in real-time all the visualized health data. More important, the app can be used to set up a remote diagnosis/test (thanks to Smart Jacket, voice call and/or video call), which is impossible before our app.  The predictive models can also alert early both residents and doctors about diseases.

## III. What consumer or market problem will this App solve? (200 words or less) *
This innovation targets to solve the problems in rural healthcare. 
* The first problem is that rural residents have greater transportation difficulties reaching health care providers. With SmartJacket, the rural residents do not need to go to the hospital to make a test/diagnosis. Instead, he/she wears the Smart Jacket, book a voice/video call with the doctor/physician and both residents and doctor/physician can see the visualized data in real-time.
* The second problem is that rural residents tend to be poorer. They can not afford the cost of many healthcare services (even simple like ECG) at the hospital. SmartJacket provides a cheap solution for them. ECG sensors (and many other wearable health sensors) are becoming cheaper and cheaper while the mobile app itself is free. 

## IV. Describe briefly why is there a need for this App? (200 words or less) *

## V. Are there similar Apps in the market, if yes, what makes this App idea unique? (200 words or less) *

## VI. Describe the typical user for this app?    *

## VII. Who will pay for the App? *

