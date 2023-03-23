/* !!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import ClusterDriver from 'shared/mixins/cluster-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
const LANGUAGE;
/* !!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/* !!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed     = Ember.computed;
const observer     = Ember.observer;
const get          = Ember.get;
const set          = Ember.set;
const setProperties= Ember.setProperties;
const alias        = Ember.computed.alias;
const service      = Ember.inject.service;
const EmberPromise = Ember.RSVP.Promise;
const all          = Ember.RSVP.all;
const next         = Ember.run.next;
const equal        = Ember.computed.equal;

const defaultRadix = 10;
const defaultBase  = 1024;
/* !!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/

const languages = LANGUAGE;
const PAGE_SIZE = 50;
const K8S_1_24_6 = '1.24.6-aliyun.1';
const K8S_1_22_15 = '1.22.15-aliyun.1';
const K8S_1_20_11 = '1.20.11-aliyun.1';

const VERSIONS = [
  {
    value:          K8S_1_24_6,
    label:          K8S_1_24_6,
    rancherEnabled: true,
    aliyunEnabled:  true,
  },
  {
    value:          K8S_1_22_15,
    label:          K8S_1_22_15,
    rancherEnabled: false,
    aliyunEnabled:  true,
  },
  {
    value:          K8S_1_20_11,
    label:          K8S_1_20_11,
    rancherEnabled: false,
    aliyunEnabled:  true,
  },
];
const DEFAULT_KUBERNETES_VERSION = K8S_1_24_6;
const KUBERNETES = 'Kubernetes';
const MANAGED = 'ManagedKubernetes';

const MODES = [
  {
    value: 'iptables',
    label: 'iptables',
  },
  {
    value: 'ipvs',
    label: 'IPVS',
  }
];

const DISKS = [
  // {
  //   label: 'clusterNew.aliyunkcs.disk.cloud',
  //   value: 'cloud'
  // },
  // {
  //   label: 'clusterNew.aliyunkcs.disk.ephemeralSsd',
  //   value: 'ephemeral_ssd'
  // },
  {
    label: 'clusterNew.aliyunkcs.disk.ssd',
    value: 'cloud_ssd'
  },
  {
    label: 'clusterNew.aliyunkcs.disk.efficiency',
    value: 'cloud_efficiency'
  },
  {
    label: 'clusterNew.aliyunkcs.disk.essd',
    value: 'cloud_essd'
  },
  // {
  //   label: 'clusterNew.aliyunkcs.disk.cloudAuto',
  //   value: 'cloud_auto'
  // },
];

const CLUSTER_TYPES = [
  {
    label: 'clusterNew.aliyunkcs.clusters.k8s',
    value: KUBERNETES
  },
  {
    label: 'clusterNew.aliyunkcs.clusters.managed',
    value: MANAGED
  }
];

const REGIONS = [
  {
    label:   'cn-beijing',
    value:   'cn-beijing',
    managed: true,
  }, {
    label: 'cn-zhangjiakou',
    value: 'cn-zhangjiakou'
  }, {
    label: 'cn-huhehaote',
    value: 'cn-huhehaote'
  }, {
    label:   'cn-hangzhou',
    value:   'cn-hangzhou',
    managed: true,
  }, {
    label:   'cn-shanghai',
    value:   'cn-shanghai',
    managed: true,
  }, {
    label: 'cn-shenzhen',
    value: 'cn-shenzhen'
  }, {
    label: 'cn-chengdu',
    value: 'cn-chengdu'
  }, {
    label: 'cn-hongkong',
    value: 'cn-hongkong'
  }, {
    label: 'ap-northeast-1',
    value: 'ap-northeast-1'
  }, {
    label:   'ap-south-1',
    value:   'ap-south-1',
    managed: true,
  }, {
    label:   'ap-southeast-1',
    value:   'ap-southeast-1',
    managed: true,
  }, {
    label: 'ap-southeast-2',
    value: 'ap-southeast-2'
  }, {
    label:   'ap-southeast-3',
    value:   'ap-southeast-3',
    managed: true,
  }, {
    label:   'ap-southeast-5',
    value:   'ap-southeast-5',
    managed: true,
  }, {
    label: 'us-east-1',
    value: 'us-east-1'
  }, {
    label: 'us-west-1',
    value: 'us-west-1'
  }, {
    label:   'me-east-1',
    value:   'me-east-1',
    managed: false
  }, {
    label: 'eu-west-1',
    value: 'eu-west-1'
  }, {
    label: 'eu-central-1',
    value: 'eu-central-1'
  }];

const NODECIDRMASKS = [
  {
    label: 16,
    value: '28'
  },
  {
    label: 32,
    value: '27'
  },
  {
    label: 64,
    value: '26'
  },
  {
    label: 128,
    value: '25'
  },
  {
    label: 256,
    value: '24'
  }
];

const CHARGETYPES = [
  {
    label: 'clusterNew.aliyunkcs.masterInstanceChargeType.postPaid',
    value: 'PostPaid'
  },
  {
    label: 'clusterNew.aliyunkcs.masterInstanceChargeType.prePaid',
    value: 'PrePaid'
  }
];
const PERIODUNIT = 'Month';
const PERIODS = [
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '6',
    value: '6'
  },
  {
    label: '12',
    value: '12'
  },
];

const PLATFORMTYPES = [
  {
    label:  'CentOS 7.7',
    value:  'CentOS',
    osType: 'Linux'
  },
  {
    label:  'AliyunLinux',
    value:  'AliyunLinux',
    osType: 'Linux'
  },
  {
    label:   'Windows Server 2019',
    value:   'Windows',
    osType:  'Windows',
    managed: true
  },
  {
    label:   'Windows Server Core, version 1909',
    value:   'WindowsCore',
    osType:  'Windows',
    managed: true
  }
];

const DEFAULT_NODE_GROUP_CONFIG = {
  name:                     'default-nodepool',
  platform:                 'CentOS',
  system_disk_category:     'cloud_efficiency',
  system_disk_size:         120,
  size:                     120,
  category:                 'cloud_efficiency',
  instances_num:            3,
  key_pair:                  null,
  instance_types:           '',
  type:                     'nodePool',
}

const MASTER = [{
  value: '3',
  label: '3'
}, {
  value: '5',
  label: '5'
}];

/* !!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(ClusterDriver, {
  driverName:  '%%DRIVERNAME%%',
  app:         service(),
  router:      service(),
  session:     service(),
  intl:        service(),

  layout:            null,
  configField:       'ackConfig',

  step:                  1,
  versionChoices:        VERSIONS,
  nodeCidrMaskChoices:   NODECIDRMASKS,

  workerPeriodUnit:                PERIODUNIT,
  masterPeriodChoices:             PERIODS,
  masterAutoRenewPeriodChoices:    PERIODS,

  zoneChoices:           [],
  systemDiskChoices:     [],
  dataDiskChoices:       [],
  proxyModeChoices:      MODES,
  resourceGroups:        null,
  storageDiskChoices:    null,
  sgChoices:             null,
  keyChoices:            null,
  allSubnets:            null,
  allInstances:          null,

  workerInstanceType:    '',
  masterInstanceType:    '',
  vswitchId:             '',
  historyK8sVerison:     '',

  editing:               equal('mode', 'edit'),
  isNew:                 equal('mode', 'new'),
  isActive:              equal('cluster.state', 'active'),
  isUpdating:            equal('cluster.state', 'updating'),
  isChangedK8sVersion:   false,
  masterNumChoices:      MASTER,
  nodePoolList:          [],
  clusterChoices:        [],
  masterCount:           '3',

  cloudCredentialDriverName: 'aliyun',
  config:                    null,

  init() {
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template      = Ember.HTMLBars.compile(decodedLayout, { moduleName: 'shared/components/cluster-driver/driver-%%DRIVERNAME%%/template' });

    set(this, 'layout', template);
    this._super(...arguments);

    const lang = get(this, 'session.language');

    get(this, 'intl.locale');
    this.loadLanguage(lang);
    let config      = get(this, 'config');

    if ( !config ) {
      if (this.isImportProvider){
        config = this.get('globalStore').createRecord({
          type:                     'ackConfig',
          imported:                 true,
          aliyun_credential_secret: '',
          cluster_id:               null,
          cluster_name:             null,
          regionId:                 'cn-beijing',
        });
      } else {
        config = this.get('globalStore').createRecord({
          type:                     'ackConfig',
          accessKeyId:              null,
          accessKeySecret:          null,
          addons:                   [{ name: 'flannel' }],
          clusterType:              KUBERNETES,
          containerCidr:            '172.20.0.0/16',
          kubernetesVersion:        DEFAULT_KUBERNETES_VERSION,
          proxyMode:                'ipvs',
          name:                     null,
          displayName:              null,
          regionId:                 'cn-beijing',
          zoneId:                   null,
          serviceCidr:              '172.21.0.0/20',
          nodeCidrMask:             '26',
          snatEntry:                true,
          endpointPublicAccess:     false,
          masterInstanceChargeType: 'PostPaid',
          masterPeriod:             '1',
          masterAutoRenew:          true,
          masterAutoRenewPeriod:    '1',
          masterSystemDiskSize:     120,
          masterSystemDiskCategory: 'cloud_efficiency',
          masterCount:              3,
          osType:                   'Linux',
          resourceGroupId:          '',
        });

        set(this, 'nodePoolList', [{
          ...DEFAULT_NODE_GROUP_CONFIG,
          size:     null,
          category: null
        }])
      }

      set(this, 'cluster.ackConfig', config);
      set(this, 'config', config);
    } else {
      get(this, 'config.masterVswitchIds.length') && set(this, 'vswitchId', get(this, 'config.masterVswitchIds')[0]);
      get(this, 'config.masterCount') && set(this, 'masterCount', get(this, 'config.masterCount').toString());
      get(this, 'config.masterInstanceTypes') && set(this, 'masterInstanceType', get(this, 'config.masterInstanceTypes')[0]);
      set(this, 'nodePoolList', (get(this, 'config.node_pool_list') || []).map((item) => {
        const dataDisk = get(item, 'data_disk.firstObject') || {};

        return {
          ...item,
          instance_types:            get(item, 'instance_types.firstObject') || '',
          size:                      dataDisk.size || '',
          category:                  dataDisk.category || '',
          displayCategory:           this.getDiskLabel(dataDisk.category),
          displaySystemDiskCategory: this.getDiskLabel(item.system_disk_category),
        }
      }));
      set(this, 'historyK8sVerison', config.kubernetesVersion);
    }
  },
  /* !!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    const intl = get(this, 'intl');
    var errors = get(this, 'errors')||[];
    if ( !get(this, 'cluster.name') ) {
      errors.push(intl.t('clusterNew.aliyunkcs.cluster.name.required'));
    }

    // Add more specific errors

    // Set the array of errors for display,
    // and return true if saving should continue.
    if ( get(errors, 'length') ) {
      set(this, 'errors', errors);
      return false;
    } else {
      set(this, 'errors', null);
      return true;
    }
  },

  actions: {
    async aliyunLogin(cb) {
      try {
        await all([this.fetchResourceGroups(), this.fetchRegions()]);

        this.regionDidChange();

        if (this.isImportProvider && this.isNew){
          set(this, 'step', 1.5);
          cb && cb(true);
        } else {
          set(this, 'step', 2);
          cb && cb(true);
        }
      } catch (e) {
        errors.push(get(e, 'body.Message') || get(e, 'body.message') || e);
        set(this, 'errors', errors);
        cb && cb();
      }
    },

    configMaster(cb) {
      set(this, 'errors', null);
      const errors = [];
      const intl = get(this, 'intl');

      const vpcId = get(this, 'config.vpcId');
      const vswitchId = get(this, 'vswitchId');
      const containerCidr = get(this, 'config.containerCidr');
      const serviceCidr = get(this, 'config.serviceCidr');

      if ( !vpcId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.vpcId.required'));
      }

      if ( !vswitchId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.vswitchId.required'));
      }

      if ( !containerCidr ) {
        errors.push(intl.t('clusterNew.aliyunkcs.containerCidr.required'));
      }

      if ( !serviceCidr ) {
        errors.push(intl.t('clusterNew.aliyunkcs.serviceCidr.required'));
      }

      if ( !this.validatePodCIDR() ) {
        errors.push(intl.t('clusterNew.aliyunkcs.containerCidr.invalid'));
      }

      if ( !this.validateServiceCIDR() ) {
        errors.push(intl.t('clusterNew.aliyunkcs.serviceCidr.invalid'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }
      this.setInstances('master').then(() => {
        set(this, 'step', 3);
        cb(true);
      });
    },

    configWorker(cb) {
      set(this, 'errors', null);
      const errors = [];
      const intl = get(this, 'intl');
      const vpcId = get(this, 'config.vpcId');
      const vswitchId = get(this, 'vswitchId');
      const containerCidr = get(this, 'config.containerCidr');
      const serviceCidr = get(this, 'config.serviceCidr');

      const masterInstanceType = get(this, 'masterInstanceType');

      if ( !masterInstanceType && get(this, 'config.clusterType') === KUBERNETES ) {
        errors.push(intl.t('clusterNew.aliyunkcs.instanceType.required'));
      }

      if ( !vpcId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.vpcId.required'));
      }

      if ( !vswitchId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.vswitchId.required'));
      }

      if ( !containerCidr ) {
        errors.push(intl.t('clusterNew.aliyunkcs.containerCidr.required'));
      }

      if ( !serviceCidr ) {
        errors.push(intl.t('clusterNew.aliyunkcs.serviceCidr.required'));
      }

      if ( !this.validatePodCIDR() ) {
        errors.push(intl.t('clusterNew.aliyunkcs.containerCidr.invalid'));
      }

      if ( !this.validateServiceCIDR() ) {
        errors.push(intl.t('clusterNew.aliyunkcs.serviceCidr.invalid'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      this.getConfigWorkerChoices(cb);
    },

    kubernetesVersionChange(val){
      if(this.editing && val !== get(this, 'historyK8sVerison') && get(val, 'value') !== get(this, 'historyK8sVerison')){
        set(this, 'isChangedK8sVersion', true);
      } else {
        set(this, 'isChangedK8sVersion', false);
      }
    },

    save(cb) {
      setProperties(this, { 'errors': null });

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const nodePoolList = get(this, 'nodePoolList');

      const clusterName = get(this, 'cluster.name');
      const config = JSON.parse(JSON.stringify(get(this, 'config')));

      const aliyun_credential_secret = get(this, 'primaryResource.cloudCredentialId');

      config.aliyun_credential_secret = aliyun_credential_secret;

      if ( !clusterName ) {
        errors.push(intl.t('clusterNew.aliyunkcs.cluster.name.required'));
      }

      if ( !config.aliyun_credential_secret ) {
        errors.push(intl.t('nodeDriver.cloudCredentialError'));
      }

      if (nodePoolList && nodePoolList.length){
        set(config, 'node_pool_list', this.formatNodePoolList(nodePoolList, errors))
      } else {
        errors.push(intl.t('clusterNew.aliyunkcs.worker.required'));
      }

      const defaultNodePool = get(config, 'node_pool_list').find((item) => item.name === 'default-nodepool') || {} ;
      const keyPair = defaultNodePool.key_pair || get(this, 'config.keyPair');

      if (!keyPair){
        errors.push(intl.t('clusterNew.aliyunkcs.keyPair.required'));
      } else {
        set(config, 'keyPair', keyPair);
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      set(this, 'cluster.ackConfig', config);

      this.send('driverSave', cb);
    },

    cancel(){
      // probably should not remove this as its what every other driver uses to get back
      get(this, 'router').transitionTo('global-admin.clusters.index');
    },

    registerCluster(cb){
      setProperties(this, { 'errors': null });

      const errors = get(this, 'errors') || [];

      set(this, 'config.imported', true);
      set(this, 'config.cluster_name', get(this, 'config.name'));
      set(this, 'config.aliyun_credential_secret', get(this, 'primaryResource.cloudCredentialId'));

      const clusterId = get(this, 'config.cluster_id')
      const intl    = get(this, 'intl');

      if ( !clusterId ) {
        errors.push(intl.t('clusterNew.aliyunkcs.clusterSelect.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }

      set(this, 'cluster.ackConfig', get(this, 'config'));
      this.send('driverSave', cb);
    },
    addNodePool() {
      let nodePoolList = get(this, 'nodePoolList');
      const ngConfig = {
        ...DEFAULT_NODE_GROUP_CONFIG,
        instance_types: get(this, 'instanceChoices.firstObject.value'),
        name:           '',
      };

      if (!Array.isArray(nodePoolList)) {
        nodePoolList = [];
      }

      nodePoolList.pushObject(ngConfig);

      set(this, 'nodePoolList', nodePoolList);
    },
    removeNodePool(nodeGroup) {
      let { nodePoolList } = this;

      if (nodePoolList && nodePoolList.length) {
        nodePoolList.removeObject(nodeGroup);
      }

      set(this, 'nodePoolList', nodePoolList);
    },
    finishAndSelectCloudCredential(cred) {
      if (cred) {
        set(this, 'primaryResource.cloudCredentialId', get(cred, 'id'));

        this.send('aliyunLogin');
      }
    },
  },

  languageDidChanged: observer('intl.locale', function() {
    const lang = get(this, 'intl.locale');

    if (lang) {
      this.loadLanguage(lang[0]);
    }
  }),

  resourceGroupChoicesShouldChange: observer('intl.locale', 'resourceGroups', function() {
    const intl    = get(this, 'intl');
    let choices = get(this, 'resourceGroups') || [];

    next(() => {
      choices = choices.filter((item) => item.raw.Status === 'OK');

      choices.unshift({
        label: intl.t('clusterNew.aliyunkcs.resourceGroup.all'),
        value: ''
      });

      set(this, 'resourceGroupChoices', choices);
    });
  }),

  regionChoicesShouldChange: observer('intl.locale', async function() {
    await this.fetchRegions();
  }),

  masterCountChange: observer('masterCount', async function() {
    set(this, 'config.masterCount', Number(get(this, 'masterCount') || 3));
  }),

  regionDidChange: observer('config.regionId', 'config.resourceGroupId', function() {
    const region = get(this, 'config.regionId');

    set(this, 'regionId', region)

    if (this.isImportProvider && region){
      set(this, 'config.cluster_id', null);

      this.fetchCluster();

      return;
    }
    const intl = get(this, 'intl');
    const resourceGroupId = get(this, 'config.resourceGroupId');
    const externalParams = { regionId: get(this, 'config.regionId'), };

    if (!!resourceGroupId && resourceGroupId !== '') {
      externalParams.resourceGroupId = resourceGroupId;
    }

    if (region) {
      this.fetch('Vpc', 'Vpcs', externalParams).then((vpcs) => {
        set(this, 'vpcs', vpcs.map((vpc) => {
          let label = `${ vpc.raw.VpcName } (${ vpc.value })`;

          if (vpc.raw.IsDefault) {
            label = `${ intl.t('clusterNew.aliyunkcs.vpcId.default') } (${ vpc.value })`;
          }

          return {
            ...vpc,
            label
          };
        }));

        const selectedVPC = get(this, 'config.vpcId');

        if (selectedVPC) {
          const found = vpcs.findBy('value', selectedVPC);

          if (!found) {
            set(this, 'config.vpcId', null);
          } else {
            this.vpcDidChange();
          }
        }
      });
      this.fetch('Zone', 'Zones', { regionId: get(this, 'config.regionId') }).then((zones) => {
        set(this, 'zoneChoices', zones);

        if (get(this, 'config.zoneId')) {
          const found = zones.findBy('value', get(this, 'config.zoneId'));

          if (!found) {
            set(this, 'config.zoneId', null);
          }
        }
      });
    }
  }),

  vpcDidChange: observer('config.vpcId', function() {
    const intl = get(this, 'intl');
    const vpcId = get(this, 'config.vpcId');
    const resourceGroupId = get(this, 'config.resourceGroupId');
    const externalParams = {
      regionId: get(this, 'config.regionId'),
      vpcId:    get(this, 'config.vpcId'),
    };

    if (!!resourceGroupId && resourceGroupId !== '') {
      externalParams.resourceGroupId = resourceGroupId;
    }

    if (vpcId) {
      this.fetch('VSwitch', 'VSwitches', externalParams).then((vswitches) => {
        set(this, 'vswitches', vswitches.map((vswitch) => {
          let label = `${ vswitch.raw.VSwitchName } (${ vswitch.value })`;

          if (vswitch.raw.IsDefault) {
            label = `${ intl.t('clusterNew.aliyunkcs.vswitchId.default') } (${ vswitch.value })`;
          }

          return {
            ...vswitch,
            label
          };
        }));

        const selectedVSwitch = get(this, 'vswitchId');

        if (selectedVSwitch) {
          const found = vswitches.findBy('value', selectedVSwitch);

          if (!found) {
            set(this, 'vswitchId', null);
          }
        }
      });
    } else {
      set(this, 'vswitchId', null);
      set(this, 'vswitches', []);
    }
  }),

  vpcsShouldChange: observer('intl.locale', function() {
    const intl = get(this, 'intl');
    let vpcs = get(this, 'vpcs');

    if (vpcs === undefined) {
      return;
    }

    next(() => {
      vpcs = vpcs.map((vpc) => {
        if (vpc.raw.IsDefault) {
          return {
            ...vpc,
            label: `${ intl.t('clusterNew.aliyunkcs.vpcId.default') } (${ vpc.value })`
          };
        } else {
          return vpc;
        }
      });

      set(this, 'vpcs', vpcs);
    });
  }),

  vswitchDidChange: observer('vswitches.[]', 'vswitchId', function() {
    const selectedVSwitch = get(this, 'vswitchId');

    if (!this.isNew) {
      return;
    }

    if (selectedVSwitch) {
      const found = get(this, 'vswitches').findBy('value', selectedVSwitch);

      if (!found) {
        set(this, 'config.zoneId', null);
        set(this, 'config.masterVswitchIds', null);
      } else {
        set(this, 'config.zoneId', found.raw.ZoneId);
        set(this, 'config.masterVswitchIds', [selectedVSwitch, selectedVSwitch, selectedVSwitch]);
      }
    } else {
      set(this, 'config.zoneId', null);
      set(this, 'config.masterVswitchIds', null);
    }
  }),

  vswitchesShouldChange: observer('intl.locale', function() {
    const intl = get(this, 'intl');
    let vswitches = get(this, 'vswitches');

    if (vswitches === undefined) {
      return;
    }

    next(() => {
      vswitches = vswitches.map((vswitch) => {
        if (vswitch.raw.IsDefault) {
          return {
            ...vswitch,
            label: `${ intl.t('clusterNew.aliyunkcs.vswitchId.default') } (${ vswitch.value })`
          };
        } else {
          return vswitch;
        }
      });
      set(this, 'vswitches', vswitches);
    });
  }),

  clusterNameDidChange: observer('cluster.name', function() {
    const clusterName = get(this, 'cluster.name');

    set(this, 'config.name', clusterName);
    set(this, 'config.displayName', clusterName);
  }),

  clusterTypeDidChange: observer('config.clusterType', function() {
    if ( get(this, 'config.clusterType') === KUBERNETES  ) {
      set(this, 'config.kubernetesVersion', DEFAULT_KUBERNETES_VERSION);
    } else {
      set(this, 'config.kubernetesVersion', DEFAULT_KUBERNETES_VERSION);
    }
  }),

  instanceChargeTypeDidChange: observer('config.masterInstanceChargeType', function() {
    this.setInstances('master');
  }),

  platformTypeDidChange: observer('nodePoolList.@each.{platform}', function() {
    const defaultNodePool = get(this, 'nodePoolList.firstObject') || {};
    const platform = get(this, 'platformChoices').find((item) => item.value === get(defaultNodePool, 'platform')) || {};

    set(this, 'config.osType', platform.osType || 'Linux');
  }),

  masterInstanceTypeDidChange: observer('masterInstanceType', function() {
    const type = get(this, 'masterInstanceType');
    const inst = get(this, 'instanceChoices').findBy('value', type) || {};

    if (inst.systemDisk && inst.systemDisk.length) {
      set(this, 'systemDiskChoices', inst.systemDisk);

      if (!get(inst, 'systemDisk').findBy('value', get(this, 'config.masterSystemDiskCategory'))){
        const firstValue = get(inst.systemDisk, 'firstObject.value');

        set(this, 'config.masterSystemDiskCategory', firstValue || null);
      }
    } else {
      this.fetchAvailableSystemDisks('master');
    }

    set(this, 'config.masterInstanceTypes', [type, type, type]);
  }),

  workersInstanceTypeDidChange: observer('nodePoolList.@each.{instance_types}', function() {
    const nodePoolList = get(this, 'nodePoolList') || [];
    const instanceChoices = get(this, 'instanceChoices') || [];

    nodePoolList.forEach((nodePool) => {
      const inst = instanceChoices.findBy('value', nodePool.instance_types) || {};

      if (inst.systemDisk && inst.systemDisk.length) {
        set(nodePool, 'systemDisk', inst.systemDisk);

        if (!get(inst, 'systemDisk').findBy('value', get(nodePool, 'system_disk_category'))){
          const firstValue = get(inst.systemDisk, 'firstObject.value')

          set(nodePool, 'system_disk_category', firstValue || null);
        }
      } else {
        this.fetchAvailableSystemDisks('worker', nodePool);
      }

      if (inst.dataDisk && inst.dataDisk.length) {
        set(nodePool, 'dataDisk', inst.dataDisk);

        const found = get(inst, 'dataDisk').findBy('value', get(nodePool, 'category'));

        if (!found){
          const firstValue = get(inst.dataDisk, 'firstObject.value');

          set(nodePool, 'category', firstValue || null);
        }
      } else {
        this.fetchAvailabelDataDisks(nodePool);
      }
    })
  }),

  nodePoolActive: computed('config.node_pool_list.@each.{nodepool_id}', function() {
    const list = get(this, 'config.node_pool_list') || [];

    return list.every((item) => {
      return item.nodepool_id;
    })
  }),

  isK8sVersionError: computed('isNew', 'isUpdating', 'cluster.transitioningMessage', function() {
    if( !get(this, 'isNew') && get(this, 'isUpdating')){
      return get(this, 'cluster.transitioningMessage', '').includes('Please check that the version of k8s to be upgraded is entered correctly')
    }

    return false;
  }),

  minNumOfNodes: computed('config.clusterType', function() {
    return get(this, 'config.clusterType') === KUBERNETES ? 0 : 1;
  }),

  selectedZone: computed('config.zoneId', 'zoneChoices', function() {
    const zoneChoices = get(this, 'zoneChoices') || [];

    return zoneChoices.findBy('value', get(this, 'config.zoneId'));
  }),

  clusterTypeChoices: computed('config.regionId', 'zoneChoices', function() {
    const region = REGIONS.findBy('value', get(this, 'config.regionId'));

    if ( region && get(region, 'managed') !== false ) {
      return CLUSTER_TYPES;
    } else {
      return CLUSTER_TYPES.filter((type) => get(type, 'value') !== MANAGED);
    }
  }),

  masterInstanceChargeTypeChoices: computed('intl.locale', function() {
    const intl = get(this, 'intl');

    return CHARGETYPES.map((item) => ({
      ...item,
      label: intl.t(item.label),
    }));
  }),

  platformChoices: computed('intl.locale', 'config.clusterType', function() {
    if (get(this, 'config.clusterType') === KUBERNETES) {
      return PLATFORMTYPES.filter((item) => get(item, 'managed') !== true);
    } else {
      return PLATFORMTYPES;
    }
  }),

  nodeCidrMaskShowValue: computed('intl.locale', 'config.nodeCidrMask', function() {
    const mask = parseInt(get(this, 'config.nodeCidrMask'));

    if (isNaN(mask)) {
      return 0;
    }

    return Math.pow(2, (32 - mask));
  }),

  vpcShowValue: computed('intl.locale', 'config.vpcId', 'vpcs.[]', function() {
    const vpcs = get(this, 'vpcs');

    if (vpcs && get(this, 'config.vpcId')) {
      return get(vpcs.findBy('value', get(this, 'config.vpcId')), 'label');
    } else {
      return get(this, 'config.vpcId') || '';
    }
  }),

  vswitchShowValue: computed('intl.locale', 'vswitchId', 'vswitches.[]', function() {
    const vswitches = get(this, 'vswitches');

    if (vswitches && get(this, 'vswitchId')) {
      return get(vswitches.findBy('value', get(this, 'vswitchId')), 'label');
    } else {
      return get(this, 'vswitchId') || '';
    }
  }),

  resourceGroupShowValue: computed('intl.locale', 'config.resourceGroupId', 'resourceGroupChoices.[]', function() {
    const resourceGroupChoices = get(this, 'resourceGroupChoices');

    if (resourceGroupChoices && get(this, 'config.resourceGroupId') !== null) {
      return get(resourceGroupChoices.findBy('value', get(this, 'config.resourceGroupId')) || {}, 'label');
    } else {
      return '';
    }
  }),

  isImportProvider: computed('router.currentRoute.queryParams', 'config.imported', function() {
    const { router } = this;
    const imported = get(this, 'config.imported');

    return imported || !!get(router, 'currentRoute.queryParams.importProvider');
  }),

  cloudCredentials: computed('model.cloudCredentials', function() {
    const { model: { cloudCredentials } } = this;

    return cloudCredentials.filter((cc) => get(cc, 'aliyunecscredentialConfig'));
  }),
  selectedCloudCredential: computed('primaryResource.cloudCredentialId', 'model.cloudCredentials.length', function() {
    return get(this, 'model.cloudCredentials').findBy('id', get(this, 'primaryResource.cloudCredentialId'))
  }),
  showImportCluster: computed('clusterChoices', 'config.cluster_id', function() {
    const clusterId = get(this, 'config.cluster_id');
    const selectCluster = get(this, 'clusterChoices').findBy('value', clusterId);

    if (clusterId && selectCluster){
      return get(selectCluster, 'label');
    }

    return '';
  }),
  showRegion: computed('regionChoices', 'config.regionId', function() {
    return this.getChoicesLabel(get(this, 'regionChoices'), get(this, 'config.regionId'))
  }),
  showClusterType: computed('clusterTypeChoices', 'config.clusterType', function() {
    return this.getChoicesLabel(get(this, 'clusterTypeChoices'), get(this, 'config.clusterType'))
  }),
  showMasterInstanceChargeType: computed('masterInstanceChargeTypeChoices', 'config.masterInstanceChargeType', function() {
    return this.getChoicesLabel(get(this, 'masterInstanceChargeTypeChoices'), get(this, 'config.masterInstanceChargeType'))
  }),
  displayMasterSystemDiskCategory: computed('config.masterSystemDiskCategory', function() {
    const masterSystemDiskCategory = get(this, 'config.masterSystemDiskCategory');

    return this.getDiskLabel(masterSystemDiskCategory);
  }),
  kubernetesVersionDisabledAliyun: computed('intl.locale', 'config.kubernetesVersion', function() {
    const kubernetesVersion = get(this, 'config.kubernetesVersion');

    return VERSIONS.find((v) => {
      return v.value === kubernetesVersion && !v.aliyunEnabled
    })
  }),

  kubernetesVersionDisabledRancher: computed('intl.locale', 'config.kubernetesVersion', function() {
    const kubernetesVersion = get(this, 'config.kubernetesVersion');

    return VERSIONS.find((v) => {
      return v.value === kubernetesVersion && !v.rancherEnabled
    })
  }),
  loadLanguage(lang) {
    const translation = languages[lang] || languages['en-us'];
    const intl = get(this, 'intl');

    if (intl.addTranslation) {
      intl.addTranslation(lang, 'clusterNew.aliyunkcs', translation.clusterNew.aliyunkcs);
    } else {
      intl.addTranslations(lang, translation);
    }

    intl.translationsFor(lang);
    set(this, 'refresh', false);
    next(() => {
      set(this, 'refresh', true);
      set(this, 'lanChanged', +new Date());
    });
  },

  setInstances(type) {
    const externalParams = { regionId: get(this, 'config.regionId'), };

    if (type === 'master') {
      set(externalParams, 'instanceChargeType', get(this, 'config.masterInstanceChargeType'));
    }

    return new EmberPromise((resolve, reject) => {
      this.fetch('InstanceType', 'InstanceTypes', externalParams)
        .then((instanceTypes) => {
          this.fetchAvailableInstances().then((availableResources) => {
            set(this, 'instanceChoices', instanceTypes.filter((instanceType) => availableResources.indexOf(instanceType.value) > -1).map((instanceType) => {
              return {
                group: instanceType.raw.InstanceTypeFamily,
                value: instanceType.value,
                label: `${ instanceType.raw.InstanceTypeId } ( ${ instanceType.raw.CpuCoreCount } ${ instanceType.raw.CpuCoreCount > 1 ? 'Cores' : 'Core' } ${ instanceType.raw.MemorySize }GB RAM )`,
              };
            }));

            if (type === 'master'){
              let instanceType;

              if ( (get(this, 'instanceChoices').findBy('value', get(this, 'masterInstanceType'))) ) {
                instanceType = get(this, 'masterInstanceType');
              } else {
                instanceType = get(this, 'instanceChoices.firstObject.value');
              }

              set(this, 'masterInstanceType', instanceType);
            } else {
              (get(this, 'nodePoolList') || []).forEach((nodePool) => {
                let instanceType = '';

                if (get(this, 'instanceChoices').findBy('value', get(nodePool, 'instance_types'))) {
                  instanceType = get(nodePool, 'instance_types');
                } else {
                  instanceType = get(this, 'instanceChoices.firstObject.value');
                }
                set(nodePool, 'instance_types', instanceType);
              })
            }

            resolve();
          });
        })
        .catch((err) => {
          const errors = get(this, 'errors') || [];

          errors.pushObject(err.message || get(err, 'body.detail') || err);
          set(this, 'errors', errors);
          reject();

          return;
        });
    });
  },

  setKeyPairs() {
    const resourceGroupId = get(this, 'config.resourceGroupId');
    const externalParams = { regionId: get(this, 'config.regionId'), };

    if (!!resourceGroupId && resourceGroupId !== '') {
      externalParams.resourceGroupId = resourceGroupId;
    }

    this.fetch('KeyPair', 'KeyPairs', externalParams).then((keyChoices) => {
      set(this, 'keyChoices', keyChoices.map((item) => {
        return {
          label: item.raw.KeyPairName,
          value: item.raw.KeyPairName
        };
      }));
      if ( !get(this, 'config.keyPair') && get(this, 'keyChoices.length') ) {
        set(this, 'config.keyPair', get(this, 'keyChoices.firstObject.value'));
      }
    }).catch((err) => {
      const errors = get(this, 'errors') || [];

      errors.pushObject(err.message || get(err, 'body.detail') || err);
      set(this, 'errors', errors);
    });
  },

  async fetchResourceGroups() {
    const groups = await this.fetch('ResourceGroup', 'ResourceGroups');

    set(this, 'resourceGroups', groups.map((group) => {
      return {
        label: `${ group.raw.DisplayName } (${ group.raw.Id })`,
        value: group.raw.Id,
        raw:   group.raw
      };
    }));
  },

  async fetchRegions() {
    const regions = await this.fetch('Region', 'Regions');
    const transformRegions = [];

    REGIONS.forEach((regionTemp) => {
      const found = regions.findBy('value', get(regionTemp, 'value'));

      if (found) {
        transformRegions.pushObject({
          ...regionTemp,
          label: found.raw.LocalName
        });
      } else {
        transformRegions.pushObject(regionTemp);
      }

      set(this, 'regionChoices', transformRegions);
    });
  },

  async fetchCluster() {
    const regionId = get(this, 'config.regionId');
    const clusters = await this.fetch('', 'cluster', { regionId, });

    set(this, 'clusterChoices', (get(clusters, 'clusters') || []).map((item, index) => {
      if (index === 0){
        set(this, 'config.cluster_id', item.cluster_id)
      }

      return {
        value:  item.cluster_id,
        label:  item.name,
        region: item.region_id,
      }
    }));
  },

  fetchAvailableInstances() {
    let results = [];

    return new EmberPromise((resolve, reject) => {
      this.fetch('', 'AvailableResource', {
        regionId:             get(this, 'config.regionId'),
        zoneId:               get(this, 'config.zoneId'),
        instanceChargeType:   get(this, 'config.masterInstanceChargeType'),
        networkCategory:      'vpc',
        destinationResource:  'InstanceType'
      }).then((res) => {
        results = this.getAvailableResources(res);
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  fetchAvailableSystemDisks(type, nodePool) {
    let results = [];
    let instanceType = '';
    const instanceChoices = get(this, 'instanceChoices') || [];

    if (type === 'master'){
      type = instanceType ? 'worker' : 'master'
      instanceType = get(this, `masterInstanceType`);
    } else {
      instanceType = get(nodePool, `instance_types`) || get(instanceChoices, 'firstObject.value');
    }

    this.fetch('', 'AvailableResource', {
      instanceType,
      regionId:             get(this, 'config.regionId'),
      zoneId:               get(this, 'config.zoneId'),
      instanceChargeType:   get(this, 'config.masterInstanceChargeType'),
      networkCategory:      'vpc',
      ioOptimized:          'optimized',
      destinationResource:  'SystemDisk'
    }).then((res) => {
      results = this.getAvailableResources(res);

      const instanceChoices = get(this, 'instanceChoices') || [];
      const systemDisk = [];

      results.forEach((item) => {
        const disk = DISKS.find((disk) => disk.value === item);

        if(disk){
          systemDisk.push({
            value: item,
            label: disk.label
          })
        }
      });

      const selectInstance = instanceChoices.findBy('value', instanceType) || {};

      set(selectInstance, 'systemDisk', systemDisk);

      type === 'master' ? set(this, 'systemDiskChoices', systemDisk) : set(nodePool, 'systemDisk', systemDisk);

      const selectedDisk = type === 'master' ? get(this, `config.masterSystemDiskCategory`) : get(nodePool, 'system_disk_category');

      if (selectedDisk) {
        const found = systemDisk.findBy('value', selectedDisk);

        if (!found) {
          const firstValue = get(systemDisk, 'firstObject.value');

          type === 'master' ? set(this, `config.masterSystemDiskCategory`, firstValue || null) : set(nodePool, `system_disk_category`, firstValue || null);
        }
      }
    });
  },

  fetchAvailabelDataDisks(nodePool) {
    let results = [];
    const instanceType = get(nodePool, 'instance_types');
    const instanceChoices = get(this, 'instanceChoices') || [];
    const selectInstance = instanceChoices.findBy('value', instanceType) || {};

    return new EmberPromise((resolve, reject) => {
      this.fetch('', 'AvailableResource', {
        instanceType,
        regionId:             get(this, 'config.regionId'),
        zoneId:               get(this, 'config.zoneId'),
        instanceChargeType:   get(this, 'config.masterInstanceChargeType'),
        networkCategory:      'vpc',
        systemDiskCategory:   get(this, 'nodePoolList.firstObject.system_disk_category'),
        ioOptimized:          'optimized',
        destinationResource:  'DataDisk'
      }).then((res) => {
        results = this.getAvailableResources(res) || [];
        const dataDiskChoices = [];

        results.forEach((item) => {
          let disk = DISKS.find((disk) => disk.value === item);

          if(disk){
            dataDiskChoices.push({
              value: item,
              label: disk.label
            })
          }
        });

        set(selectInstance, 'dataDisk', dataDiskChoices)

        set(nodePool, 'dataDisk', dataDiskChoices);
        if (!dataDiskChoices.findBy('value', get(nodePool, 'category'))){
          const firstValue = get(dataDiskChoices, 'firstObject.value');

          set(nodePool, 'category', firstValue || null);
        }

        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  getAvailableResources(res) {
    const results = [];
    const zones = res['AvailableZones'];

    if (!zones){
      return results;
    }

    zones.AvailableZone.forEach((zone) => {
      zone['AvailableResources']['AvailableResource'].forEach((resource) => {
        resource['SupportedResources']['SupportedResource'].forEach((support) => {
          if ( support.Status === 'Available' && results.indexOf(support.Value) === -1 ) {
            results.pushObject(support.Value);
          }
        });
      });
    });

    return results;
  },

  validatePodCIDR() {
    const containerCidr = get(this, 'config.containerCidr');
    const segment = containerCidr.split('/')[0];
    const subnet  = containerCidr.split('/')[1];
    const segmentSplit = segment.split('.');

    if (segmentSplit[0] === '10') {
      return (parseInt(subnet) >= 8 && parseInt(subnet) <= 32);
    }

    if (segmentSplit[0] === '192' && segmentSplit[1] === '168') {
      return (parseInt(subnet) >= 16 && parseInt(subnet) <= 32);
    }

    if (segmentSplit[0] === '172') {
      if (!(parseInt(segmentSplit[1]) >= 16 && parseInt(segmentSplit[1]) <= 31)) {
        return false;
      }

      if (!(parseInt(subnet) >= 12 && parseInt(subnet) <= 16)) {
        return false;
      }

      return true;
    }

    return false;
  },

  validateServiceCIDR() {
    const containerCidr = get(this, 'config.serviceCidr');
    const segment = containerCidr.split('/')[0];
    const subnet  = containerCidr.split('/')[1];
    const segmentSplit = segment.split('.');


    if (segmentSplit[0] === '10') {
      return (parseInt(subnet) >= 16 && parseInt(subnet) <= 24);
    }

    if (segmentSplit[0] === '192' && segmentSplit[1] === '168') {
      return (parseInt(subnet) >= 16 && parseInt(subnet) <= 24);
    }

    if (segmentSplit[0] === '172') {
      if (!(parseInt(segmentSplit[1]) >= 16 && parseInt(segmentSplit[1]) <= 31)) {
        return false;
      }
      if (parseInt(subnet) >= 16 && parseInt(subnet) <= 24) {
        return true;
      }
    }

    return false;
  },

  fetch(resource, plural, externalParams = {}, page = 1) {
    let resourceName = '';

    if (resource){
      resourceName = this.toLowerCaseInitial(resource);
    } else {
      resourceName  = this.toLowerCaseInitial(plural)
    }
    if (resourceName === 'vSwitch'){
      resourceName = 'vswitch'
    }

    let acceptLanguage = 'zh-CN';

    if (get(this, 'intl.locale.firstObject') === 'en-us') {
      acceptLanguage = 'en-US';
    }

    const cloudCredentialId = get(this, 'primaryResource.cloudCredentialId');
    const results = [];
    const location = window.location;
    let req = {};

    const url = `${ location.origin }/meta/ack/${ resourceName }`
    const query = Object.assign({}, externalParams, {
      cloudCredentialId,
      acceptLanguage,
    })

    query.pageSize = PAGE_SIZE;
    query.pageNumber = page;

    req = {
      url:     `${ url }?${ this.getQueryParamsString(query) }`,
      method:  'GET',
    };

    return new EmberPromise((resolve, reject) => {
      if (!cloudCredentialId){
        // console.error(`${resourceName}: "cloudCredentialId" not found`)
        return resolve(results);
      }
      get(this, 'globalStore').rawRequest(req).then((res) => {
        if (resource === '') {
          return resolve(res.body);
        }

        const current = res.body[`${ plural }`][resource];

        results.pushObjects(current.map((item) => {
          return {
            label: item[`${ resource }Id`],
            value: item[`${ resource }Id`],
            raw:   item,
          };
        }));

        if (res.body.TotalCount > ((PAGE_SIZE * (page - 1)) + current.length)) {
          return this.fetch(resource, plural, externalParams, page + 1)
            .then((array) => {
              results.pushObjects(array);
              resolve(results);
            })
            .catch((err) => {
              reject(get(err, 'body.detail') || err);
            });
        } else {
          resolve(results);
        }
      }).catch((err) => {
        reject(get(err, 'body.detail') || err);
      });
    });
  },

  getQueryParamsString(params, deep = false) {
    const keys = Object.keys(params).sort((a, b) => {
      return a < b ? -1 : 1;
    });

    return keys.map((key) => {
      if (params[key] === undefined) {
        return '';
      }

      return `${ key }${ deep ? encodeURIComponent('=') : '=' }${ encodeURIComponent(params[key]) }`;
    }).join(deep ? encodeURIComponent('&') : '&');
  },
  toLowerCaseInitial(name){
    return name.charAt(0).toLowerCase() + name.slice(1);
  },
  formatNodePoolList(nodePools, errors){
    const intl = get(this, 'intl');

    return nodePools.map((item) => {
      if (!item.name){
        errors.push(intl.t('clusterNew.aliyunkcs.nodePoolName.required'));
      }
      if (!item.system_disk_category){
        errors.push(intl.t('clusterNew.aliyunkcs.rootType.required'));
      }

      return {
        nodepool_id:          item.nodepool_id,
        name:                 item.name,
        instance_types:       [item.instance_types],
        instances_num:        item.instances_num,
        key_pair:             item.key_pair || this.config.keyPair,
        platform:             item.platform,
        system_disk_category: item.system_disk_category,
        system_disk_size:     item.system_disk_size,
        data_disk:            (!item.size || !item.category) ? [] : [{
          size:     item.size,
          category: item.category,
        }],
        v_switch_ids: [get(this, 'vswitchId')]
      }
    })
  },
  getConfigWorkerChoices(cb){
    all([
      this.setInstances('worker'),
      this.setKeyPairs()
    ]).then(() => {
      set(this, 'step', 4);
      cb && cb(true);
    }).catch(() => {
      cb && cb();

      return;
    });
  },
  getChoicesLabel(choices, id){
    if (!id) {
      return '';
    } else {
      if (!choices) {
        return id;
      }
    }

    return get(choices.findBy('value', id), 'label') || '';
  },
  getDiskLabel(category){
    if (!category){
      return '';
    }

    const intl = get(this, 'intl');
    const disk = DISKS.findBy('value', category);

    if (!disk){
      return category;
    } else {
      return intl.t(get(disk, 'label'));
    }
  },
  // Any computed properties or custom logic can go here
});
