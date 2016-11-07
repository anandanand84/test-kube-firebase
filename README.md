# test-kube-firebase

Sample for stack overflow question on recommendations to use:
     
This is to verify if firebase works in kuberenetes using service. Seems it does not work. 

```
kubectl logs -f sample-deployment-3634798615-6p6cx
Error: FIREBASE FATAL ERROR: Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com 
    at Error (native)
    at xc (/src/node_modules/firebase/database-node.js:55:277)
    at yc (/src/node_modules/firebase/database-node.js:57:20)
    at Object.firebase.INTERNAL.registerService.Reference [as database] (/src/node_modules/firebase/database-node.js:255:241)
    at P.N (/src/node_modules/firebase/app-node.js:18:94)
    at Timeout.<anonymous> (/src/index.js:19:19)
    at next (native)
    at onFulfilled (/src/node_modules/co/index.js:65:19)
```