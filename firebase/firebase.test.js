// Path: ./firebase/firebase.test.js
//
// Unit tests for Firebase setup and export.

// 1. Setup mocks for the firebase modules before import.

// 1.1. Mock the firebase/app module.
const mockApp = {}
const mockGetApps = jest.fn();
const mockInitializeApp = jest.fn().mockReturnValue(mockApp);
jest.mock('firebase/app', () => ({
  getApps: mockGetApps,
  initializeApp: mockInitializeApp
}));

// 1.2. Mock the firebase/auth module.
// const mockInitializeAuth = jest.fn().mockReturnValue('mockAuth');
// jest.mock('firebase/auth', () => ({
//   initializeAuth: mockInitializeAuth
// }));

// 1.3. Mock the firebase/database module.
// const mockGetDatabase = jest.fn().mockReturnValue('mockDB');
// jest.mock('firebase/database', () => ({
//   getDatabase: mockGetDatabase
// }));

// 1.4. Mock the firebase/firestore module.
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn().mockReturnValue('mockFirestore')
}));

// 1.5. Mock the firebase/functions module.
// jest.mock('firebase/functions', () => ({
//   getFunctions: jest.fn().mockReturnValue('mockFunctions')
// }));

// 1.6. Mock the firebase/analytics module.
// jest.mock('firebase/analytics', () => ({
//   getAnalytics: jest.fn().mockReturnValue('mockAnalytics')
// }));

// 2. Import and test the firebase setup module.
// 2.0. Reset the mock function call counters before each test.
beforeEach(() => {
  jest.clearAllMocks();
});

describe('Firebase service setup and export', () => {
  it('should initialize the app if not already initialized', () => {
    jest.isolateModules(() => {
      // 2.1. Test the app initialization.
      // Scenario: mockGetApps returns an empty array.
      mockGetApps.mockImplementation(() => []);
      const { app } = require('./firebase');
      expect(mockInitializeApp).toHaveBeenCalled();
      expect(app).toBeDefined();
    });
  });

  it('should update ref to the app if already initialized', () => {
    jest.isolateModules(() => {
      // Scenario: mockGetApps returns a non-empty array.
      mockGetApps.mockImplementation(() => [{}]);
      const { app } = require('./firebase');
      expect(mockInitializeApp).not.toHaveBeenCalled();
      expect(app).toBeDefined();
    });
  });

  // it('should initialize the auth service', () => {
  //   // 2.2. Test the auth service initialization.
  //   jest.isolateModules(() => {
  //     const { app, auth } = require('./firebase');
  //     expect(mockInitializeAuth).toHaveBeenCalled();
  //     expect(auth).toBe('mockAuth');
  //   });
  // });

  // it('should initialize the real-time database', () => {
  //   // 2.3. Test the real-time database initialization.
  //   jest.isolateModules(() => {
  //     const { app, fRealDB } = require('./firebase');
  //     expect(mockGetDatabase).toHaveBeenCalled();
  //     expect(mockGetDatabase).toHaveBeenCalledWith(app);
  //     expect(fRealDB).toBe('mockDB');
  //   });
  // });

  it('should initialize the Firestore database', () => {
    // 2.4. Test the Firestore database initialization.
    jest.isolateModules(() => {
      const { app, fFirestore } = require('./firebase');
      expect(getFirestore).toHaveBeenCalled();
      expect(getFirestore).toHaveBeenCalledWith(app);
      expect(fFirestore).toBe('mockFirestore');
    });
  });

  // it('should initialize the Cloud Functions', () => {
  //   // 2.5. Test the Cloud Functions initialization.
  //   jest.isolateModules(() => {
  //     const { app, fFunctions } = require('./firebase');
  //     expect(getFunctions).toHaveBeenCalled();
  //     expect(getFunctions).toHaveBeenCalledWith(app);
  //     expect(fFunctions).toBe('mockFunctions');
  //   });
  // });

  // it('should initialize the Analytics service', () => {
  //   // 2.6. Test the Analytics service initialization.
  //   jest.isolateModules(() => {
  //     const { app, fAnalytics } = require('./firebase');
  //     expect(getAnalytics).toHaveBeenCalled();
  //     expect(getAnalytics).toHaveBeenCalledWith(app);
  //     expect(fAnalytics).toBe('mockAnalytics');
  //   });
  // });
});
