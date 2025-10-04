import React from 'react';
import DropdownMenu from './DropdownMenu';
import RightComponents from './RightComponent';
function Options() {
   return (
      <div>
         <div className="container mt-4">
            <div className="row">
               <div className="col-8">
                  <DropdownMenu title={'Account Opening'} links={['Resident individual', 'Minor', 'Non Resident Indian (NRI)', 'Company, Partnership, HUF and LLP', 'Glossary']} icon={<i class="fa-solid fa-plus"></i>} />

                  <DropdownMenu title={'Your Zerodha Account'} links={['Your Profile', 'Account modification', 'Client Master Report (CMR) and Depository Participant (DP)', 'Nomination', 'Transfer and conversion of securities']} icon={<i class="fa-regular fa-user"></i>} />

                  <DropdownMenu title={'Kite'} links={['IPO', 'Trading FAQs', 'Margin Trading Facility (MTF) and Margins', 'Charts and orders', 'Alerts and Nudges', 'General']} icon={<i class="fa-solid fa-arrow-left"></i>} />

                  <DropdownMenu title={'Funds'} links={['Add money', 'Withdraw money', 'Add bank accounts', 'eMandates']} icon={<i class="fa-solid fa-indian-rupee-sign"></i>} />

                  <DropdownMenu title={'Console'} links={['Portfolio', 'Corporate actions', 'Funds statement', 'Reports', 'Profile', 'Segments']} icon={<i class="fa-solid fa-circle-half-stroke"></i>} />

                  <DropdownMenu title={'Coin'} links={['Mutual funds', 'National Pension Scheme (NPS)', 'Fixed Deposit (FD)', 'Features on Coin', 'Payments and Orders', 'General']} icon={<i class="fa-solid fa-circle-notch"></i>} />
               </div>
               <div className="col">
                  <RightComponents/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Options;