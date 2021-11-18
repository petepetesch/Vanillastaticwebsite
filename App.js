import * as React from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import JsonData from './data.json'
 
const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

var PBIlink = "https://msit.powerbi.com/groups/28d98cd5-edc2-4e72-a5fa-ca18910196be/reports/fbe61164-ef7b-4c8b-a908-bcf4f2d13635/ReportSection2f347367692ad00a8703?filter=Feature%2FFeatureID%20eq%20%27";

var UVOClist =[ 
 { "@search.score": 20.942509,
  "FeatureID": "MFR-M365-5161",
  "ProductArea": "Networking",
  "ProductSubArea": "Virtual Network",
  "FeatureTitle": "Move/re-map a VM to a different VNet in the same subscription",
  "FeatureDescription": "Would like to see ability to move/re-map a VM to a different vNet in the same subscription.\n\n\"Description: Customer had jumped into Azure and was initially confused around VNETs / Subnets. They now have a few VM's that they'd want to move to a different VNET. This would allow them to not loose their investment in the VM but at the same time consolidate their VNETs. \n\nInformation below merged from feature record MFR-M365-8633:\nAction Required from PG: Allow customers to move a VM to a different VNET using the Portal. I would say within the same subscription to begin with. But if this could be combined with the move of the VM's its resources to a VNET in a different subscription that would be awesome! \n\nWorkaround: destroy the VM and recreate from the old disk.\"",
  "DomainOwnerPriority": "Unrated",
  "Status": "With PM Team",
  "FeatureCreatedOnDate": "2019-07-18T21:47:08Z",
  "CRMLink": "https://m365crm.crm.dynamics.com/main.aspx?appid=bf381023-a1eb-42ad-b3f5-4ad6a41655fc&etn=ems_productfeature&id=829A2D8F-A5A9-E911-A986-000D3A1BE436&newWindow=true&pagetype=entityrecord",
  "GPM": null,
  "PM": null,
  "Keywords": "; #Networking.Usability;#Migration;#Networking.Migration"
},
{
  "@search.score": 15.5052805,
  "FeatureID": "MFR-M365-9746",
  "ProductArea": "Storage",
  "ProductSubArea": "Managed Disks",
  "FeatureTitle": "Support managed disks with AZs to move across subscriptions",
  "FeatureDescription": "Support moving VM’s (incl disk) automatically across subscriptions and AZ’s \nSupport moving VM’s within shared VNET\nSupport managed disks to automatically move across subscriptions when it’s VM is moved\nSupport managed disks to automatically move across same AZ where it’s VM is moved.\n\nDescription: LinkedIn plans to run all its prod infrastructure in an Azure region in a single availability-zone. They expect VMs to be spread across 30-40 subscriptions. They require the ability to move a VM from one subscription to another.\n\nThis includes:\nThe ability to move a VM with managed disks and AZ\nVMs deployed to a shared virtual network\n\n\"I create a VM ScaleSet in subscription-1 in a specific Azure availability-zone. The VMs in the ScaleSet draw IPs from a shared v-net and have attached managed disk(s). I'd like to move the VMSS along with its managed disks to subscription-2. The VMSS would continue to be in the same availability-zone \"\n\nAlternative Solutions: \n *  Deallocate and stop the VMs\n *  Take snapshots of attached disks\n *  Create disks in another subscription from the snapshots\n *  Create VMs from the copied disks",
  "DomainOwnerPriority": "Unrated",
  "Status": "Assigned to Release/Sprint",
  "FeatureCreatedOnDate": "2020-06-11T17:08:55Z",
  "CRMLink": "https://m365crm.crm.dynamics.com/main.aspx?appid=bf381023-a1eb-42ad-b3f5-4ad6a41655fc&etn=ems_productfeature&id=394DD537-06AC-EA11-A812-000D3A8C09CF&newWindow=true&pagetype=entityrecord",
  "GPM": null,
  "PM": "Yuemin Lu",
  "Keywords": "#ASME:Others;"
},
{
  "@search.score": 14.710744,
  "FeatureID": "MFR-M365-5412",
  "ProductArea": "Compute",
  "ProductSubArea": "Virtual Machines",
  "FeatureTitle": "Support Non-Destructive VM VNet Move in the portal",
  "FeatureDescription": "Customer desires UX or Easier way to move Vms between Vnets without having to write PowerShell scripts",
  "DomainOwnerPriority": "Unrated",
  "Status": "Submitted for Prioritization",
  "FeatureCreatedOnDate": "2019-08-02T17:53:42Z",
  "CRMLink": "https://m365crm.crm.dynamics.com/main.aspx?appid=bf381023-a1eb-42ad-b3f5-4ad6a41655fc&etn=ems_productfeature&id=EEC1B770-4EB5-E911-A988-000D3A1BE436&newWindow=true&pagetype=entityrecord",
  "GPM": null,
  "PM": null,
  "Keywords": ";#Migration"
},
{
  "@search.score": 5.2513733,
  "FeatureID": "MFR-M365-9243",
  "ProductArea": "Networking",
  "ProductSubArea": "Application Gateway",
  "FeatureTitle": "GS VMs support Accelerated Networking",
  "FeatureDescription": "\"The customer would like to request following features. The absence of these features is causing them business losses.  Customer Wish/Ask/Compete Comparison Answer Given so far 3. Cannot change performance profile of a disk without increasing size. Roadmap? Will check on this. 4. Cannot change IOPS limit of VM without resizing and paying for more CPU/RAM than needed. Roadmap for Ultra SSD to be looked at. Here is an explanation they got.                                           From: Wissam Elriachy  Sent: Monday, January 7, 2019 11:30 AMTo: Christian Ash Cc: Andrew Toi ; Michael Myrah Subject: RE: Azure Ultra SSD Preview - WideOrbitHi Christian,Thank you for your email.Ultra SSD increases the IOPS and throughput on a single disk level. It does NOT increase the IO limits imposed by the VM itself. In general, we recommend premium storage for most applications unless your workload can benefit of one of the below added values:1. Workloads that require lower latency than what our premium disks offer (consistent sub millisecond latency)2. Workloads that can benefit from dynamically adjusting the performance of the disks, examples: a. You chose to start small on IOPS/throughput and increase them as your workload grow.b. You have a report job that runs on a weekly basis: you can increase the performance during that timeframe, then drop it after the job has completed.3. We do have an experimental VM size that would allow the VM to achieve 160K IOPS only when used with Ultra SSD. This is the only scenario where you would get more IOPS at the VM level.4. Ease of management: administrators that do not wish to stripe disks to achieve the VM limits. (Today to achieve 80K IOPS on a single VM, you will need to strip multiple premium storage disks)Please let me know if you have any further questions.Thanks,Wissam Elriachy 5. Cannot resize disk without deallocating. Disk attached to VMs cant be resized. They want everything to be dynamic. Here they want hot resize of disks attached especially SSD. 6. Cannot change availability set of a VM. Requirement is to Add it to an Availibility Set while it is up s difficult to know when a VM is being throttled because it hit the limit of its perf SKU. NO idea on this so far. Is there and alerting mechanism? 19. GS VM SKUs do not support Accelerated Networking. Memory to Core ratio in GS VMs were a great fit for the requirements but they dont support Accelerated Networking. Roadmap. At least show it in the portal. 20. DNS servers per VNET cannot be changed without restarting VMs. We need it to be possible. Zero impact operations for changes like these is expected.\nDesired Outcome: The features as requested must be added to Azure since other cloud providers have promised these features. Else they would like to explore options to move to another cloud.\nActual Outcome:",
  "DomainOwnerPriority": "Unrated",
  "Status": "Evidence Gathering",
  "FeatureCreatedOnDate": "2020-05-11T21:55:56Z",
  "CRMLink": "https://m365crm.crm.dynamics.com/main.aspx?appid=bf381023-a1eb-42ad-b3f5-4ad6a41655fc&etn=ems_productfeature&id=1CD6312F-D293-EA11-A811-000D3A8C0957&newWindow=true&pagetype=entityrecord",
  "GPM": null,
  "PM": null,
  "Keywords": "#Networking.Compute;"
},
{
  "@search.score": 4.074279,
  "FeatureID": "MFR-M365-9702",
  "ProductArea": "Networking",
  "ProductSubArea": "DNS",
  "FeatureTitle": "Azure DNS (Private): Support Dynamic DNS updates for IPv6 addresses like for IPv4 addresses.",
  "FeatureDescription": "Acceptance Criteria: Dual stack VMs created get automatically an AAAA record (via DHCPv6 updating DNS) in the private DNS like they do with the A record (via DHCP updating the DNS)\n\nDescription: When you start a VM and it has been assigned an IPv6 address on its NIC, there are no AAAA record automatically created in the private Azure DNS.\n\nTechnical info:\nWhen you provision a VM on Azure, an IPv4 address will be assigned via DHCP to the VM. At VM start, the DHCP client will send option 12, hostname, to the DHCP server, which will use this information to register an A record with the hostname and IPv4 address in Azure DNS zone.\nToday you can provision a VM with an IPv6 address. The IPv6 address is assigned via DHCPv6 to the VM. However, at start, despite the DHCPv6 client sending the OPTION_CLIENT_FQDN (Option 39 RFC4704, DHCPv6 uses different options than DHCP(v4) to send the hostname or FQDN) the DHCPv6 server does not register a AAAA record in the Azure DNS zone.\n\nNeed:\nLinkedIn is deploying there own DNS infrastructure, so we will create an A and AAAA resource record in our DNS zone by reading the provisioning records in Azure. However LinkedIn plan to to shift to Azure DNS infrastructure sometimes around June 2020 (related EPIC70, EPIC71) .LinkedIn will need this functionality by then\n\nAdditional note:\nIt is not helpful to have IPv6 addresses on VMs if these VMs do not have an AAAA record in the DNS. The VMs may be able to communicate over IPv6 but they cannot locate their IPv6 address using DNS. This is a big break/blocker for any IPv6 adoption in Azure. See also risks.\n\nReferences:\n\n *  \nhttps://www.iana.org/assignments/bootp-dhcp-parameters/bootp-dhcp-parameters.xhtml\n *  \nhttps://www.iana.org/assignments/dhcpv6-parameters/dhcpv6-parameters.xhtml\n *  \nhttps://tools.ietf.org/html/rfc2132\n *  \nhttps://tools.ietf.org/html/rfc4704\n *  \nhttps://serverfault.com/questions/537502/dhcp-clients-where-is-the-hostname-going-to-come-from\n *  \nhttps://bugs.launchpad.net/ubuntu/+source/isc-dhcp/+bug/1604617\n\nCustomer Impact: All LinkedIn infrastructure is dual stack (IPv4 and IPv6) with DNS records (A and AAAA), Azure should be no exception. Without an AAAA record in the DNS the server is not visible over IPv6 for its clients, therefore all the work on enabling IPv6 for VNET and ER is moot.\n\nImpacted Teams:\nWhen LinkedIn move to MSFT infrastructure for DNS, they do not have this feature, INFRADEV and Foundation will have to write custom scripts to ensure the AAAA is registered in the DNS. There will be delay from the VM/Service being up and visible. Moreover, other MSFT services that use the same infrastructure will not be visible on IPv6, and every team will have to write registration scripts, for each image, leading to hard to trace errors due to a lack of standards.\n\n\nRisks:\nWhen this feature is enabled, suddenly many hosts will be discoverable in the Azure DNS as having IPv6, connections over IPv6 will be initiated and if the services are not listening on IPv6 or NSG are not configured, there will be a possibility of a site wide outage.\nTo mitigate these risks the Linkedin API has different mechanisms to handle a lack of reachability to IPv6 (or IPv4). There is fallback (timeout and try next haddress) or happy eyeballs (try all destinations simultaneously, and pick the first one to connect, discard the rest). This entirely depends on library used in python and java and we have been looking at failure scenarios where code does not tolerate service failures (see recent DNS outages due to improper client error handling).\nAt the moment we are not relying on MSFT DNS infrastructure, so if this feature happens before we switch to MSFT DNS infrastructure then this will be handled as we switch. The plan currently is to use a post VM startup script (on the VM or on a daemon) to register the A record in our own DNS. We will register the AAAA too once the VMs are dual stack.\nNot having this feature means that all communications will still be IPv4, VMs will be dual stack but will have no mechanism to naturally talk IPv6 between each-others, leading may be developers to hard code IPv6 in their connection functions.\n\nAlternative Solutions: Have a script post startup to manually register the record in the private DNS but this create some scalability and security issues,\nOr do not use Azure Private DNS services.",
  "DomainOwnerPriority": "Unrated",
  "Status": "Submitted for Prioritization",
  "FeatureCreatedOnDate": "2020-06-09T19:40:12Z",
  "CRMLink": "https://m365crm.crm.dynamics.com/main.aspx?appid=bf381023-a1eb-42ad-b3f5-4ad6a41655fc&etn=ems_productfeature&id=76FF1508-89AA-EA11-A812-000D3A9AFD23&newWindow=true&pagetype=entityrecord",
  "GPM": null,
  "PM": null,
  "Keywords": null
}
]

// JSON definition & example result set

const externalString = 'string external constant to function edited as a constant to function';
const welcome = {greeting: 'Hey', title: 'React from Pedro! si!'};
var someString2 = 'test of string function';

function getTitle(title) {

  return title;

}

function UvocListFn () {

  return (

    <ul>
        {UVOClist.map(function(item) {
          return <li key={item.objectID}> 
           <span>
           {item.FeatureTitle} 
           </span> --
           <span> {item.PM} </span> --  <span> {item.Status} -- </span>  </li>;
        })}

      </ul>
  );
}


function sayHello() {

  return("Hello from Say Hello!")
  
}

function GridResults() {

  return(<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1b of 3
    </div>
    <div class="col-md-auto">
      bVariable width content
    </div>
    <div class="col col-lg-2">
      3b of 3
    </div>
  </div>
</div>




  )

}

function Search() {
return(
<div>

<label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <p> </p>
      <button id="abutton" /> 
      <button onClick={sayHello}>   Say Hello 
</button>

</div>


)


}

function DownloadUVOC() {
return (
  <CSVLink data={UVOClist}>Download UVOC CSV</CSVLink> )

}


function JsonDataDisplay(){
  const DisplayData=JsonData.map(
      (info)=>{
          return(
              <tr>
                  <td>{info.id}</td>
                  <td>{info.name}</td>
                  <td>{info.city}</td>
              </tr>
          )
      }
  )

  return(
      <div>
          <table class="table table-striped">
              <thead>
                  <tr>
                  <th>Sr.NO</th>
                  <th>Name</th>
                  <th>City</th>
                  </tr>
              </thead>
              <tbody>
               
                  
                  {DisplayData}
                  
              </tbody>
          </table>
           
      </div>
  )
}



function UVOCDataDisplay(){
  const DisplayData=UVOClist.map(
      (info)=>{
          return(
            
              <tr>
                  <td>{info.FeatureID}</td>
                  <td>{info.ProductArea}</td>
                  <td>{info.ProductSubArea}</td>
                  <td><b>{info.FeatureTitle} </b></td>
                  <td>{info.FeatureDescription}</td>
                  <td><a href={info.CRMLink}>CRM</a></td>
                  <td><a href={PBIlink+ info.FeatureID + "%27"}>PowerBI</a></td>
              </tr>
          )
      }
  )

  return(
      <div>
          <table class="table table-striped">
              <thead>
                  <tr>
                  <th>FeatureID</th>
                  <th>ProductArea</th> 
                  <th>ProductSubArea </th>
                  <th>Feature Title</th>
                  <th>Feature Description</th>
                  <th>CRM Link</th>
                  <th>PowerBI Link</th>
                  </tr>
              </thead>
              <tbody>
               
                  
                  {DisplayData}
                  
              </tbody>
          </table>
           
      </div>
  )
}


function App() {
  const someString = 'text string from javascript code';
  return (
    <div className="App">
      <h1> Hello to Pedro's world! </h1>
      <h2> {welcome.greeting} {welcome.title} </h2>
      <h3> Hello {getTitle('React returned from function')} </h3>
      <p>"test two"</p>
      <p> {someString}</p>
      <p> {someString2} </p>
      <p> {someString2 = someString2 + " newer new var value..."} </p>
      <p/> {externalString}
      <p/>
      <p/>
      {console.log(externalString)}

      
      <p/>
      <UvocListFn />
      <Search />
      <DownloadUVOC />
      <GridResults />
      <JsonDataDisplay />
      <UVOCDataDisplay />     
      
          </div>
  );
}

export default App;
