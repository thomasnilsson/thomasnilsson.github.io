#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(DistancePlugin, "DistancePlugin",
           CAP_PLUGIN_METHOD(authorize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getDistance, CAPPluginReturnPromise);
           )
