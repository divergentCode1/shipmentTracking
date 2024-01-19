public class ShipmentTrackingCallout {
    @AuraEnabled
    public static String getShipmentTrackingStatus(string trackingNumber){
          
        try{
   
            if(trackingNumber == '')
                trackingNumber = null;
        
            Http http = new Http();
            HttpRequest req = new HttpRequest();
            HttpResponse resp = new  HttpResponse();
            req.setEndpoint('https://merzcommunities--mel.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber='+trackingNumber);
            req.setMethod('GET');
            try{
                resp = http.send(req);
                return resp.getBody();
            }
            catch(CalloutException ex){

                String exceptionError = ' CalloutException: '+ ex.getMessage();
                system.debug(' CalloutException: '+ ex.getMessage());
                return exceptionError;

            }
        } 
        catch(Exception ex)
        {
            String exceptionError = ' Exception: '+ ex.getMessage() + ' ' + 'LineNumber = '+ex.getLineNumber();
            system.debug(' Exception: '+ ex.getMessage() + ' ' + 'LineNumber = '+ex.getLineNumber());
            return exceptionError;

        }        
        
     }
  }