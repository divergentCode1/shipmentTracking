import { LightningElement} from 'lwc';
import getShipmentTrackingStatus from '@salesforce/apex/ShipmentTrackingCallout.getShipmentTrackingStatus';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

    

export default class ShipmentTracking extends LightningElement {


    trackingNumber   = '';
    isLoading        = false;

    handleTrackingNumberChange(event) {
        this.trackingNumber = event.target.value;
        console.log('this.trackingNumber '+this.trackingNumber);
    }

    handleTrackButtonClick() {
        this.isLoading = true;
        getShipmentTrackingStatus({ trackingNumber: this.trackingNumber })
            .then(result => {
                if(result)
                    this.showToast('Success', 'Shipment Status: ' + result, 'success');
                    console.log('Shipment Status:', result);
               
            })
            .catch(error => {
                console.error('Error calling ShipmentTrackingCallout:', error);
                this.showToast('Error', 'Error calling ShipmentTrackingCallout', 'error');
            })
            .finally(() => {
                // Hide loader regardless of success or failure
                this.isLoading = false;
            });
    
    }   
    
    showToast(title, message, variant) {
        const toastEvent = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(toastEvent);
    }



}