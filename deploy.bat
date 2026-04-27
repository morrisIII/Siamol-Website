@echo off
cd /d "c:\Users\MS\OneDrive\Documents\WEBSITE"
"C:\Program Files\Git\bin\git.exe" init
"C:\Program Files\Git\bin\git.exe" add .
"C:\Program Files\Git\bin\git.exe" commit -m "Deploy Siamol Electrical website"
"C:\Program Files\Git\bin\git.exe" branch -M main
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/morrisIII/Siamol-Website.git
"C:\Program Files\Git\bin\git.exe" push -u origin main
echo Deployment complete. Enable GitHub Pages in the repository settings.